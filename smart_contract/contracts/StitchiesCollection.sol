// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

///@dev
// install while in same folder that contracts are in. If not use github links to import
// npm i erc721a @openzeppelin/contracts -D

// Import Xurth fork of ERC721A for Remix deploy
// import "https://github.com/xurth/ERC721A/blob/main/contracts/ERC721A.sol";

import "./ERC721A.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract StitchiesCollection is ERC721A, Ownable, ReentrancyGuard, Pausable{
    uint256 public maxSupply = 50;
    uint256 public maxMint = 4;
    uint256 public mintPrice = 0.01 ether; // @dev 10 finney = 0.01 ether

    string private baseURI;
    string public baseExtension = ".json";
    string public notRevealedUri;

    bool public revealed = false;
    bool public isMintEnabled = false;

    mapping(address => uint256) totalPublicMint;

    // Constructor
    // initialize cid for baseUri, make sure / is at end and metadata files named like "x.png" "x.json" not "name x.png" etc
    // initialize pre-reveal cid(add hidden.json after /

    constructor (
        string memory _initBaseURI,
        string memory _initNotRevealedUri
        ) ERC721A("Stitchies Collection", "STI") {
            setBaseURI(_initBaseURI); 
            setNotRevealedURI(_initNotRevealedUri); 
    }

    // only allows external tx origin to be called

    modifier userOnly {
        require(tx.origin == msg.sender,"Error: Cannot be called by another contract");
        _;
    }

    // let users mint tokens based on requirements

    function mint(uint256 _quantity) external payable whenNotPaused userOnly nonReentrant {
        require(isMintEnabled, "Public mint is currently paused");
        require(msg.value >= (_quantity * mintPrice), "Not enough ether sent");
        require(totalSupply() + _quantity <= maxSupply, "Error: over the max supply");
        require((totalPublicMint[msg.sender] + _quantity) <= maxMint, "Error: Cannot mint more than public max");

        totalPublicMint[msg.sender] += _quantity;
        _safeMint(msg.sender, _quantity);
    }

    // return tokenUri given the tokenId

    function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
    {
    require(_exists(tokenId),"ERC721Metadata: URI query for nonexistent token");
    
    if(revealed == false) {
        return notRevealedUri;
    }

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, _toString(tokenId), baseExtension))
        : "";
    }

    // owner updates and functions

    function togglePublicMint() external onlyOwner {
        isMintEnabled = !isMintEnabled;
    }

    function reveal() external onlyOwner {
      revealed = !revealed;
    }
    function setPrice(uint256 _mintPrice) external onlyOwner {
    mintPrice = _mintPrice;
    }

    function setmaxMintAmount(uint256 _maxMint) external onlyOwner {
    maxMint = _maxMint;
    }
  
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function setBaseExtension(string memory _newBaseExtension) external onlyOwner {
        baseExtension = _newBaseExtension;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
        notRevealedUri = _notRevealedURI;
    }

    function withdraw() external onlyOwner nonReentrant {
        payable(owner()).transfer(address(this).balance);
    }


}