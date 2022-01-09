// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Storage {
    uint256 public s = 1;
    uint256 public c;
    uint256 public t = 1;
    mapping(address => uint256) balances;

    struct Farmer {
        address farmerAddress;
        string farmerId;
        string farmerName;
        string location;
        string cropName;
        uint256 phone;
        uint256 quantity;
        uint256 expectedPrice;
    }

    struct Lot {
        string lotNum;
        string grade;
        uint256 MRP;
        string testDate;
        string expiryDate;
    }

    address public Tester;
    address Owner;
    mapping(string => Farmer) farmer;
    mapping(string => Lot) lot;
    Farmer[] public farmers;
    Lot[] public lots;

    function produce(
        address faddress,
        string memory id,
        string memory name,
        string memory loc,
        string memory cr,
        uint256 con,
        uint256 q,
        uint256 pr
    ) public {
        Storage.Farmer memory newfarmer = Farmer(
            faddress,
            id,
            name,
            loc,
            cr,
            con,
            q,
            pr
        );
        farmer[id] = newfarmer;
        farmers.push(newfarmer);
        s++;
    }

    function getFarmerAddress(uint256 j) public view returns (address) {
        return (farmers[j].farmerAddress);
    }

    function getproduce(uint256 j)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            uint256,
            uint256,
            uint256
        )
    {
        return (
            farmers[j].farmerId,
            farmers[j].farmerName,
            farmers[j].location,
            farmers[j].cropName,
            farmers[j].phone,
            farmers[j].quantity,
            farmers[j].expectedPrice
        );
    }

    function quality(
        string memory ll,
        string memory g,
        uint256 p,
        string memory tt,
        string memory e
    ) public {
        Storage.Lot memory newlot = Lot(ll, g, p, tt, e);
        lot[ll] = newlot;
        lots.push(newlot);
        t++;
    }

    function getquality(string memory k)
        public
        view
        returns (
            string memory,
            string memory,
            uint256,
            string memory,
            string memory
        )
    {
        return (
            lot[k].lotNum,
            lot[k].grade,
            lot[k].MRP,
            lot[k].testDate,
            lot[k].expiryDate
        );
    }

    function fundaddr(address addr) public {
        balances[addr] = 2000;
    }

    function sendCoin(
        address receiver,
        uint256 amount,
        address sender
    ) public returns (bool sufficient) {
        if (balances[sender] < amount) return false;

        balances[sender] -= amount;
        balances[receiver] += amount;

        return true;
    }

    function getBalance(address addr) public view returns (uint256) {
        return balances[addr];
    }
}
