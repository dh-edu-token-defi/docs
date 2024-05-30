# Contract Documentation

This section provides detailed documentation of the smart contracts used in the Meme Token Launcher project.

## Standardized Shaman Interfaces

### Base Interface
- **IShaman**
  - Inherits: `IERC165`

### Base Shaman Flavour Interfaces
- **IShaman**
  - ├── **IAdminShaman**
  - ├── **IManagerShaman**
  - └── **IGovernorShaman**

## Base Shaman Contract

- **ShamanBase**
  - Inherits: `IShaman`, `ContextUpgradeable`, `ReentrancyGuardUpgradeable`, `ERC165Upgradeable`
  
- **AdminShaman**
  - Inherits: `IAdminShaman`, `ShamanBase`
  
- **ManagerShaman**
  - Inherits: `IManagerShaman`, `ShamanBase`
  
- **GovernorShaman**
  - Inherits: `IGovernorShaman`, `ShamanBase`
  
- **ZodiacModuleShaman**
  - Inherits: `ZodiacModule`, `ShamanBase`
  - ZodiacModule:
    - └── **Module (Zodiac)**

## Yeet24ShamanModule Updates

- **Yeet24ShamanModule**
  - Inherits: `IYeet24Shaman`, `ZodiacModuleShaman`, `AdminShaman`, `ManagerShaman`

### Requirements
- Contract **MUST** be added as both Shaman and Safe module
- Shaman **MUST** have *admin* and *manager* privileges

### Execute Function
- Conditions:
  - Not already executed (`executed` flag)
  - `block.timestamp >= expiration`
  - `yeethBalance >= threshold`
- Actions:
  - Manager privileges: `_baal.mintShares` to double DAO shares, new shares sent to Shaman
  - Admin privileges: `_baal.setAdminConfig` to make DAO shares/loot transferable
  - ZodiacModule privileges: Submits multisend instructions to DAO vault:
    - Call WETH9 to wrap `yeethBalance`
    - Transfer wrapped `yeethBalance` to Shaman
    - Call `Yeet24ShamanModule.createPoolAndMintPosition`

### Contract Events
- **Setup**(address indexed baal, address indexed vault, uint256 threshold, uint256 expiration, uint256 poolFee)
- **Executed**(address indexed token, uint256 tokenSupply, uint256 ethSupply)
- **UniswapPositionCreated**(address indexed pool, uint256 indexed tokenId, uint160 sqrtPriceX96, uint128 liquidity, uint256 amount0, uint256 amount1)

### createPoolAndMintPosition
- Callable only by the DAO vault
- Initializes the Uniswap V3 pool and mints a new position with collected ETH and token shares.

## HOS Summoner Updates

- Update saltNonce generation for Shaman deployments:
  ```solidity
  bytes32 salt = keccak256(
      abi.encodePacked(
          baalAddress,
          i,
          shamanTemplates[i],
          shamanPermissions[i],
          keccak256(initShamanDeployParams[i]),
          saltNonce
      )
  );

## TODOs
- Improve logic for handling allowed list Shaman - templates in HOS summoner
- Better requirements
- Naming convention on HOS referrer and additional events