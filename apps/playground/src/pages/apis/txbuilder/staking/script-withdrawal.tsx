import { useState } from "react";

import {
  deserializePoolId,
  mConStr0,
  resolveScriptHash,
  resolveStakeKeyHash,
  Transaction,
} from "@meshsdk/core";
import { useWallet } from "@meshsdk/react";

import Input from "~/components/form/input";
import InputTable from "~/components/sections/input-table";
import LiveCodeDemo from "~/components/sections/live-code-demo";
import TwoColumnsScroll from "~/components/sections/two-columns-scroll";
import Codeblock from "~/components/text/codeblock";
import { demoPlutusAlwaysSucceedScript } from "~/data/cardano";
import { getTxBuilder } from "../common";

export default function StakingWithdraw() {
  return (
    <TwoColumnsScroll
      sidebarTo="scriptWithdrawal"
      title="Withdraw Rewards from Staking Script"
      leftSection={Left()}
      rightSection={Right()}
    />
  );
}

function Left() {
  let codeSnippet = `txBuilder\n  .withdrawal(rewardAddress, lovelace)`;

  return (
    <>
      <p>
        Withdrawal with <code>MeshTxBuilder</code> comes with only one API, to
        specify the reward address and the amount to withdraw.
      </p>
      <ul>
        <li>
          <b>rewardAddress (string)</b> - the reward address to withdraw from
        </li>
        <li>
          <b>lovelace (number)</b> - the amount to withdraw in Lovelace
        </li>
      </ul>
      <Codeblock data={codeSnippet} />
    </>
  );
}

function Right() {
  const { wallet, connected } = useWallet();
  const [stakeScriptHash, setStakeScriptHash] = useState<string>(
    resolveScriptHash(demoPlutusAlwaysSucceedScript, "V2"),
  );
  const [userInput, setUserInput] = useState<string>("1000000");

  async function runRegisterDemo() {
    const utxos = await wallet.getUtxos();
    const address = await wallet.getChangeAddress();
    const poolIdHash = deserializePoolId(
      "pool107k26e3wrqxwghju2py40ngngx2qcu48ppeg7lk0cm35jl2aenx",
    );

    const txBuilder = getTxBuilder();

    const unsignedTx = await txBuilder
      // .withdrawalPlutusScriptV2()
      // .withdrawalScript(demoPlutusAlwaysSucceedScript, "V2")
      // .withdrawalRedeemerValue(mConStr0([]))
      .registerStakeCertificate(stakeScriptHash)
      .delegateStakeCertificate(stakeScriptHash, poolIdHash)
      .selectUtxosFrom(utxos)
      .changeAddress(address)
      .complete();

    const signedTx = await wallet.signTx(unsignedTx, true);
    const txHash = await wallet.submitTx(signedTx);
    return txHash;
  }

  async function runDemo() {
    const utxos = await wallet.getUtxos();
    const address = await wallet.getChangeAddress();
    const addresses = await wallet.getRewardAddresses();
    const rewardAddress = addresses[0]!;

    if (rewardAddress === undefined) {
      throw "No address found";
    }

    const txBuilder = getTxBuilder();

    const unsignedTx = await txBuilder
      .withdrawal(rewardAddress, userInput)
      .selectUtxosFrom(utxos)
      .changeAddress(address)
      .complete();

    const signedTx = await wallet.signTx(unsignedTx);
    const txHash = await wallet.submitTx(signedTx);
    return txHash;
  }

  let code = ``;
  code += `const utxos = await wallet.getUtxos();\n`;
  code += `const address = await wallet.getChangeAddress();\n`;
  code += `const addresses = await wallet.getRewardAddresses();\n`;
  code += `const rewardAddress = addresses[0]!;\n`;
  code += `\n`;
  code += `if (rewardAddress === undefined) {\n`;
  code += `  throw "No address found";\n`;
  code += `}\n`;
  code += `\n`;
  code += `const txBuilder = getTxBuilder();\n`;
  code += `\n`;
  code += `const unsignedTx = await txBuilder\n`;
  code += `  .withdrawal(rewardAddress, "${userInput}")\n`;
  code += `  .selectUtxosFrom(utxos)\n`;
  code += `  .changeAddress(address)\n`;
  code += `  .complete();\n`;
  code += `\n`;
  code += `const signedTx = await wallet.signTx(unsignedTx);\n`;
  code += `const txHash = await wallet.submitTx(signedTx);\n`;

  return (
    <>
      <LiveCodeDemo
        title="Register Script Stake Key"
        subtitle="Withdraw staking rewards."
        runCodeFunction={runRegisterDemo}
        disabled={!connected}
        runDemoButtonTooltip={
          !connected ? "Connect wallet to run this demo" : undefined
        }
        runDemoShowBrowseWalletConnect={true}
      >
        <InputTable
          listInputs={[
            <Input
              value={stakeScriptHash}
              onChange={(e) => setStakeScriptHash(e.target.value)}
              placeholder="Stake Key Hash"
              label="Stake Key Hash"
              key={0}
            />,
          ]}
        />
      </LiveCodeDemo>
      <LiveCodeDemo
        title="Withdraw Reward"
        subtitle="Withdraw staking rewards."
        runCodeFunction={runDemo}
        disabled={!connected}
        runDemoButtonTooltip={
          !connected ? "Connect wallet to run this demo" : undefined
        }
        runDemoShowBrowseWalletConnect={true}
        code={code}
      >
        <InputTable
          listInputs={[
            <Input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Amount in lovelace"
              label="Amount in lovelace"
              key={0}
            />,
          ]}
        />
      </LiveCodeDemo>
    </>
  );
}
