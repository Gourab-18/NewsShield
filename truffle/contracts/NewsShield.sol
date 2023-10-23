//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract NewsShield {
    // news approved for voting
    struct News {
        string link;
        string id;
    }
    struct ApprovedNews {
        string link;
        string id;
        VotingStatusOfApprovedNews status;
        //    once voting has started, the list of participants who have voted
        address[] voters;
        bool verdict;
        uint256 timeVotingStarted;
        uint256 totalVoters;
    }

    enum VotingStatusOfApprovedNews {
        VotingNotStarted,
        VotingStarted,
        VotingOver
    }

    struct Voter {
        address voter;
        bool voted;
        // stake amount
        uint256 stake;
        // fake or not
        bool voteChoice;
    }

    // news will be referred by unique id so it can be used as key in map
    mapping(string => ApprovedNews) setStatusOfNews;
    // each news can have multiple voter and using each voters address we can access Voter
    mapping(string => mapping(address => Voter))
        public indivisualNewsVoterDecision;

    string[] public newsIds;

    // This starts the voting process
    function setApprovalStatus(string memory _id, string memory _link) public {
        ApprovedNews memory obj;

        obj.link = _link;
        obj.id = _id;
        obj.status = VotingStatusOfApprovedNews.VotingStarted;
        obj.timeVotingStarted = block.timestamp;
        setStatusOfNews[_id] = obj;
        newsIds.push(_id);
    }

    // onClicking on participate
    // done by indivisual person

    function participateInVoting(string memory _id, address _voter) public {
        require(msg.sender == _voter, "You should not join");

        setStatusOfNews[_id].voters.push(_voter);
        setStatusOfNews[_id].totalVoters++;
    }

    function giveVote(
        string memory _id,
        address _voter,
        uint256 _stake,
        bool _voteChoice
    ) public payable {
        require(msg.sender == _voter, "You have not participated in voting");
        require(
            indivisualNewsVoterDecision[_id][_voter].voted == true,
            "You have already voted"
        );
        require(
            setStatusOfNews[_id].status !=
                VotingStatusOfApprovedNews.VotingOver,
            "Voting over"
        );

        require(msg.value == _stake);

        Voter memory obj;
        obj.voteChoice = _voteChoice;
        obj.voted = true;
        obj.stake = _stake;
        // the staked money will be stored in contract
        // payable(address(this)).transfer(_stake);
        indivisualNewsVoterDecision[_id][_voter] = obj;
    }

    // decide verdict for a news and sistribute money
    // it will be called after time is over
    function decideVerdict(string memory _id) public payable {
        require(
            block.timestamp - setStatusOfNews[_id].timeVotingStarted >= 5,
            "Voting has not ended"
        );

        setStatusOfNews[_id].status = VotingStatusOfApprovedNews.VotingOver;

        // finding all voters for the contract
        address[] memory allVotersForTheNews;
        allVotersForTheNews = setStatusOfNews[_id].voters;

        uint256 n = setStatusOfNews[_id].totalVoters;

        uint256 moneyCollectedFor;
        uint256 moneyCollectedAgainst;

        uint256 _for;
        uint256 _against;

        for (uint256 i = 0; i < n; i++) {
            if (
                indivisualNewsVoterDecision[_id][allVotersForTheNews[i]]
                    .voteChoice
            ) {
                _for++;
                moneyCollectedFor += indivisualNewsVoterDecision[_id][
                    allVotersForTheNews[i]
                ].stake;
            } else {
                _against++;
                moneyCollectedAgainst += indivisualNewsVoterDecision[_id][
                    allVotersForTheNews[i]
                ].stake;
            }
        }

        if (_for >= _against) {
            // divide money of against people
            setStatusOfNews[_id].verdict = true;
            uint256 divideAmt = moneyCollectedAgainst;
            for (uint256 i = 0; i < n; i++) {
                if (
                    indivisualNewsVoterDecision[_id][allVotersForTheNews[i]]
                        .voteChoice
                ) {
                    payable(allVotersForTheNews[i]).transfer(
                        indivisualNewsVoterDecision[_id][allVotersForTheNews[i]]
                            .stake + (divideAmt / _for)
                    );

                    // shall we not substract the same amount from the contract?
                } else {
                    indivisualNewsVoterDecision[_id][allVotersForTheNews[i]]
                        .stake = 0;
                }
            }
        } else {
            uint256 divideAmt = moneyCollectedFor;
            setStatusOfNews[_id].verdict = false;

            for (uint256 i = 0; i < n; i++) {
                if (
                    indivisualNewsVoterDecision[_id][allVotersForTheNews[i]]
                        .voteChoice
                ) {
                    indivisualNewsVoterDecision[_id][allVotersForTheNews[i]]
                        .stake = 0;
                } else {
                    payable(allVotersForTheNews[i]).transfer(
                        indivisualNewsVoterDecision[_id][allVotersForTheNews[i]]
                            .stake + (divideAmt / _against)
                    );
                }
            }
        }
    }

    // view functions

    // return all participants for an id

    function getAllParticipantsOfANews(string memory _id)
        external
        view
        returns (address[] memory)
    {
        return setStatusOfNews[_id].voters;
    }

    function getVerdictOfANews(string memory _id) external view returns (bool) {
        return setStatusOfNews[_id].verdict;
    }

    function getTimeStampOfANews(string memory _id)
        external
        view
        returns (uint256)
    {
        return setStatusOfNews[_id].timeVotingStarted;
    }

    function getStake(string memory _id, address _person)
        external
        view
        returns (uint256)
    {
       return indivisualNewsVoterDecision[_id][_person].stake;
    }

    function checkVotingStatus(string memory _id, address _person)
        external
        view
        returns (bool)
    {
       return indivisualNewsVoterDecision[_id][_person].voted;
    }

    function checkVotingDecision(string memory _id, address _person)
        external
        view
        returns (bool)
    {
       return indivisualNewsVoterDecision[_id][_person].voteChoice;
    }
}
