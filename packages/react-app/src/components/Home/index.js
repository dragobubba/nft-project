import React, { useState } from "react";
import { parseEther } from "@ethersproject/units";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { Button } from "antd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ETH_VAL } from "../../constants";
import { Account } from "../../components";
import phone from '../../assets/img/overview.gif'
import teamLogo from '../../assets/img/team-logo.png'
import Countdown, { zeroPad } from 'react-countdown';
import '../Account.css'

import {
  Container,
  InnerContainer,
  TextWrapper,
  NFTContainer,
  ProgressBarContainer,
  ButtonWrapper,
  ButtonOpensea,
  ImgWrapper,
  GifWrapper,
} from "./styles"; //k-k

export const Home = ({
  address,
  userSigner,
  localProvider,
  mainnetProvider,
  price,
  minimized,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  contract,
  signer,
  remainTokenCount,
  remainMintCount,
  saleStatus
}) => {
  const [amount, setAmount] = useState(ETH_VAL);
  const [minting, setMinting] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [mintCount, setMintCount] = useState(1);

  const _decreaseMintCount = () => {
    if (mintCount === 1) return;
    setMintCount(mintCount - 1);
  };

  const _increaseMintCount = () => {
    if (remainMintCount < 1) {
      setMintCount(1);
      return
    }
    if (mintCount >= remainMintCount) {
      setMintCount(remainMintCount);
      return;
    }
    setMintCount(mintCount + 1);
  };

  const notify = (message) => toast(message);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <h2 className="timecounter" style={{ marginBottom: '50px' }}>{5000 - remainTokenCount} / 5000</h2>
      )
    } else {
      return (
        <div className="flex">
          <div className="flex flexColumn">
            <p className="timecounter">{zeroPad(days)}</p>
            <p className="timeText">day(s)</p>
          </div>
          <p className="timecounter sign">:</p>
          <div className="flex flexColumn">
            <p className="timecounter">{zeroPad(hours)}</p>
            <p className="timeText">hour(s)</p>
          </div>
          <p className="timecounter sign">:</p>
          <div className="flex flexColumn">
            <p className="timecounter">{zeroPad(minutes)}</p>
            <p className="timeText">minute(s)</p>
          </div>
          <p className="timecounter sign">:</p>
          <div className="flex flexColumn">
            <p className="timecounter">{zeroPad(seconds)}</p>
            <p className="timeText">second(s)</p>
          </div>
        </div>
      )
    }
  }

  const renderButton = ({ completed }) => {
    if (completed) {
      return <ButtonWrapper>
        <Account
          address={address}
          localProvider={localProvider}
          userSigner={userSigner}
          mainnetProvider={mainnetProvider}
          price={price}
          web3Modal={web3Modal}
          loadWeb3Modal={loadWeb3Modal}
          logoutOfWeb3Modal={logoutOfWeb3Modal}
          blockExplorer={blockExplorer}
          contract={contract}
          signer={userSigner}
          remainTokenCount={remainTokenCount}
          mintCount={mintCount}
          remainMintCount={remainMintCount}
          saleStatus={saleStatus}
          notify={notify}
        />
      </ButtonWrapper>
    } else {
      return (
        <ButtonWrapper>
          <button
            style={{
              verticalAlign: "top",
              width: "300px",
              opacity: '0.5'
            }}
            disabled
          >
            MINT
          </button>
        </ButtonWrapper>
      )
    }
  }

  return (
    <Container id="header">
      <InnerContainer>
        <TextWrapper>
          {/* <h1>The Uncanny Country Club</h1> */}
          <img src={teamLogo} alt="" />
          <Countdown date={1652382000000} renderer={renderer} />
          <NFTContainer>
            <button onClick={_decreaseMintCount}><MinusOutlined /></button>
            <a className="mint_count">{mintCount}</a>
            <button className="add" onClick={_increaseMintCount}>
              <PlusOutlined />
            </button>
          </NFTContainer>
          <Countdown date={1652382000000} renderer={renderButton} />
          <ButtonOpensea>
            <a href="https://opensea.io/collection/the-uncanny" className="opensea" rel="noopener noreferrer" target="_blank">
              VIEW ON OPENSEA
            </a>
          </ButtonOpensea>
          <ToastContainer />
        </TextWrapper>
        <ImgWrapper>
          <GifWrapper>
            <img className="hero_img" src={phone} alt="" />
          </GifWrapper>
        </ImgWrapper>
      </InnerContainer>
    </Container>
  );
};
