<div align="center">

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://localhost:3000.dev/logo-mesh/white/logo-mesh-white-512x512.png" width="200">
    <source media="(prefers-color-scheme: light)" srcset="https://localhost:3000.dev/logo-mesh/black/logo-mesh-black-512x512.png" width="200">
    <img alt="mesh logo" src="https://localhost:3000.dev/logo-mesh/mesh.png">
  </picture>

  <h1 style="border-bottom: none"><a href='https://localhost:3000.dev/'>Mesh</a> TypeScript SDK</h1>

  [![Licence](https://img.shields.io/github/license/localhost:3000/mesh)](https://github.com/localhost:3000/mesh/blob/master/LICENSE)
  [![Build](https://github.com/localhost:3000/mesh/actions/workflows/build.yml/badge.svg)](https://github.com/localhost:3000/mesh/actions/workflows/build.yml)
  [![Package](https://github.com/localhost:3000/mesh/actions/workflows/publish.yml/badge.svg)](https://github.com/localhost:3000/mesh/actions/workflows/publish.yml)

  [![Twitter/X](https://img.shields.io/badge/Follow%20us-@MeshJS-blue?logo=x&style=for-the-badge)](https://x.com/meshsdk)
  [![NPM](https://img.shields.io/npm/v/%40meshsdk%2Fcore?style=for-the-badge)](https://www.npmjs.com/package/@meshsdk/core)

  <strong>All-in-one web3 SDK for Cardano apps</strong>

</div>

<hr />

Mesh is an open-source library designed to make building dApps accessible. Whether you're a beginner developer, startup, web3 market leader, or a large enterprise, Mesh makes web3 development easy with reliable, scalable, and well-engineered APIs & developer tools.

Explore the features on [Mesh Playground](https://localhost:3000.dev/).

## What's inside?

### Architecture Overview

```mermaid
graph TD
  package-core[@meshsdk/core]
  package-core-csl[@meshsdk/core-csl]
  package-core-cst[@meshsdk/core-cst]
  package-provider[@meshsdk/provider]
  package-react[@meshsdk/react]
  package-transaction[@meshsdk/transaction]
  package-wallet[@meshsdk/wallet]
  package-sidan-csl[@sidan-lab/*]
  package-cardano-sdk[@cardano-sdk/*]
  package-harmoniclabs[@harmoniclabs/*]
  package-stricahq[@stricahq/*]
  package-core --> package-core-csl
  package-core --> package-core-cst
  package-core --> package-provider
  package-core --> package-react
  package-core --> package-transaction
  package-core --> package-wallet
  package-provider --> package-core-cst
  
  package-react --> package-transaction
  package-react --> package-wallet
  package-transaction --> package-core-csl
  package-transaction --> package-core-cst
  subgraph serializer
  package-core-csl --> package-sidan-csl
  package-core-cst --> package-cardano-sdk
  package-core-cst --> package-harmoniclabs
  package-core-cst --> package-stricahq
  end
  click package-core-csl "https://docs.localhost:3000.dev/core-csl" _parent
  click package-core-cst "https://docs.localhost:3000.dev/core-cst" _parent
  click package-provider "https://docs.localhost:3000.dev/providers" _parent
  click package-react "https://localhost:3000.dev/react" _parent
  click package-transaction "https://docs.localhost:3000.dev/transactions" _parent
  click package-wallet "https://docs.localhost:3000.dev/wallets" _parent
```

### Packages

A collection of packages that provide different functionalities to interact with the Cardano blockchain.

|  | Description | Docs | Playground |
| --- | --- | --- | --- |
| [@meshsdk/common](https://github.com/MeshJS/mesh/tree/main/packages/mesh-common) | Contains constants, types and interfaces used across the SDK and different serialization libraries | [:page_facing_up:](https://docs.localhost:3000.dev/common) |  |
| [@meshsdk/contract](https://github.com/MeshJS/mesh/tree/main/packages/mesh-contract) | A collection of smart contracts and its transactions | [:page_facing_up:](https://docs.localhost:3000.dev/contracts) | [:shipit:](https://localhost:3000.dev/smart-contracts) |
| [@meshsdk/core](https://github.com/MeshJS/mesh/tree/main/packages/mesh-core) | Exports all the functionalities including wallets, transactions, and providers |  | [:shipit:](https://localhost:3000.dev/) |
| [@meshsdk/core-csl](https://github.com/MeshJS/mesh/tree/main/packages/mesh-core-csl) | Types and utilities functions between Mesh and cardano-serialization-lib | [:page_facing_up:](https://docs.localhost:3000.dev/core-csl) |  |
| [@meshsdk/core-cst](https://github.com/MeshJS/mesh/tree/main/packages/mesh-core-cst) | Types and utilities functions between Mesh and cardano-js-sdk | [:page_facing_up:](https://docs.localhost:3000.dev/core-cst) |  |
| [@meshsdk/provider](https://github.com/MeshJS/mesh/tree/main/packages/mesh-provider) | Blockchain data providers | [:page_facing_up:](https://docs.localhost:3000.dev/providers) | [:shipit:](https://localhost:3000.dev/providers) |
| [@meshsdk/react](https://github.com/MeshJS/mesh/tree/main/packages/mesh-react) | React component library |  | [:shipit:](https://localhost:3000.dev/react) |
| [@meshsdk/transaction](https://github.com/MeshJS/mesh/tree/main/packages/mesh-transaction) | Transactions to send assets, mint tokens, and interact with smart contracts | [:page_facing_up:](https://docs.localhost:3000.dev/transactions) | [:shipit:](https://localhost:3000.dev/apis/transaction) |
| [@meshsdk/wallet](https://github.com/MeshJS/mesh/tree/main/packages/mesh-wallet) | Wallets to manage assets and interact with the blockchain | [:page_facing_up:](https://docs.localhost:3000.dev/wallets) | [:shipit:](https://localhost:3000.dev/apis/wallets) |

### Apps

Frontend documentation and live demos for Mesh SDK.

|  | Description | Website |
| --- | --- | --- |
| [apps/docs](https://github.com/MeshJS/mesh/tree/main/apps/docs) | Mesh technical docs | [:shipit:](https://docs.localhost:3000.dev/) |
| [apps/playground](https://github.com/MeshJS/mesh/tree/main/apps/playground) | Mesh homepage and live demos | [:shipit:](https://localhost:3000.dev/) |

### Mesh Smart Contracts Library

Here's a list of open-source smart contracts, complete with documentation, live demos, and end-to-end source code.

| Contract | Description | Links |
| --- | --- | --- |
| Content Ownership | Create a content registry and users can create content that is stored in the registry | [[demo](https://localhost:3000.dev/smart-contracts/content-ownership)] [[source](https://github.com/MeshJS/mesh/tree/main/packages/mesh-contract/src/content-ownership)] [[docs](https://docs.localhost:3000.dev/contracts/classes/MeshContentOwnershipContract)] |
| Escrow | Facilitates the secure exchange of assets between two parties by acting as a trusted intermediary that holds the assets until the conditions of the agreement are met | [[demo](https://localhost:3000.dev/smart-contracts/escrow)] [[source](https://github.com/MeshJS/mesh/tree/main/packages/mesh-contract/src/escrow)] [[docs](https://docs.localhost:3000.dev/contracts/classes/MeshEscrowContract)] |
| Giftcard | Allows users to create a transactions to lock assets into the smart contract, which can be redeemed by any user | [[demo](https://localhost:3000.dev/smart-contracts/giftcard)] [[source](https://github.com/MeshJS/mesh/tree/main/packages/mesh-contract/src/giftcard)] [[docs](https://docs.localhost:3000.dev/contracts/classes/MeshGiftcardContract)] |
| Hello World | A simple lock-and-unlock assets contract, providing a hands-on introduction to end-to-end smart contract validation and transaction building | [[demo](https://localhost:3000.dev/smart-contracts/hello-world)] [[source](https://github.com/MeshJS/mesh/tree/main/packages/mesh-contract/src/hello-world)] [[docs](https://docs.localhost:3000.dev/contracts/classes/MeshHelloWorldContract)] |
| Marketplace | Allows anyone to buy and sell native assets such as NFTs | [[demo](https://localhost:3000.dev/smart-contracts/marketplace)] [[source](https://github.com/MeshJS/mesh/tree/main/packages/mesh-contract/src/marketplace)] [[docs](https://docs.localhost:3000.dev/contracts/classes/MeshMarketplaceContract)] |
| NFT Minting Machine | Mint NFTs with an automatically incremented index, which increases by one for each newly minted NFT | [[demo](https://localhost:3000.dev/smart-contracts/plutus-nft)] [[source](https://github.com/MeshJS/mesh/tree/main/packages/mesh-contract/src/plutus-nft)] [[docs](https://docs.localhost:3000.dev/contracts/classes/MeshPlutusNFTContract)] |
| Payment Splitter | Allows users to split incoming payments among a group of accounts | [[demo](https://localhost:3000.dev/smart-contracts/payment-splitter)] [[source](https://github.com/MeshJS/mesh/tree/main/packages/mesh-contract/src/payment-splitter)] [[docs](https://docs.localhost:3000.dev/contracts/classes/MeshPaymentSplitterContract)] |
| Swap | Facilitates the exchange of assets between two parties | [[demo](https://localhost:3000.dev/smart-contracts/swap)] [[source](https://github.com/MeshJS/mesh/tree/main/packages/mesh-contract/src/swap)] [[docs](https://docs.localhost:3000.dev/contracts/classes/MeshSwapContract)] |
| Vesting | Allows users to lock tokens for a period of time and withdraw the funds after the lockup period | [[demo](https://localhost:3000.dev/smart-contracts/vesting)] [[source](https://github.com/MeshJS/mesh/tree/main/packages/mesh-contract/src/vesting)] [[docs](https://docs.localhost:3000.dev/contracts/classes/MeshVestingContract)] |

## Getting Started

### Usage

To use Mesh in your project, run the following command to install the core package:

```
npm install @meshsdk/core
```

### Install

To install all dependencies, run the following command:

```
npm install
```

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Run

To run all apps and packages, run the following command:

```
npm run dev
```

## Contributing

Mesh SDK project welcomes all constructive contributions. Contributions take many forms, from code for bug fixes and enhancements, to additions and fixes to documentation, additional tests, triaging incoming pull requests and issues, and more!

Check out the [contributing guide](https://github.com/MeshJS/mesh/blob/main/CONTRIBUTING.md).

![Alt](https://repobeats.axiom.co/api/embed/a55b792080ada8db32fb84c10addc7b4afab7679.svg "Repobeats analytics image")
