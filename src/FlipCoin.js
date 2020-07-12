import React, { Component } from 'react'
import Coin from './Coin'
import "./FlipCoin.css"

export default class FlipCoin extends Component {
    static defaultProps = {
        coinFaces: ['head', 'tail'],
        faces: {
            head: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg",
            tail: "https://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=60cc053aff79840f9d11e48b16aabfe7c23edb9a-1594534772-0-AVt9t4XGHMm_SVv9F8rAmPv5yVmu_abo-OmnDroTU4v0UoUDo37gYEFaG4CT7Gn0wsjYFKekI-LVZplMf63ghc1yBHBVlveiGNNqndmuMkXPSk7-I_GWGa6MyDTnWt_I31KE7JXaj0Kks5EU268Sll9gv2A7fa41Kb2EpB03f7vbYenCDWWusoK09fLa899q5luTtXcXttZyiHUUOhSj-av2S5ruKbirVo1GgUnT6qoYceHxjg9kesITYxzWo_GTR3luSQq6N_zECfUfyL3d5MtR55JaGlpgyzHHWCtiKinDuB8qaadZ9P8ddiNQdBiHrw"
        }
    }
    state = {
        numberOfFlip: 0,
        head: 0,
        tail: 0,
        coinFace: ''
    }
    flipCoin() {


        let randIdx = Math.floor(Math.random() * this.props.coinFaces.length)
        let face = this.props.coinFaces[randIdx];
        console.log(face)
        // console.log(coinFaces[face])
        //Head or Tail
        if (face === "head") {
            this.setState((prevSate) => {
                return {
                    numberOfFlip: prevSate.numberOfFlip + 1,
                    head: prevSate.head + 1,
                    coinFace: this.props.faces.head,
                }
            })
        } else {
            this.setState((prevSate) => {
                return {
                    numberOfFlip: prevSate.numberOfFlip + 1,
                    tail: prevSate.tail + 1,
                    coinFace: this.props.faces.tail,
                }
            })
        }

    }
    handleFlip = () => {
        this.flipCoin()
    }
    render() {
        return (
            <div className="FlipCoin">
                <h2>Let's flip a coin!</h2>
                <div className="CoinHolder">
                    <Coin coinFace={this.state.coinFace} />
                </div>
                <button onClick={this.handleFlip}>Flip</button>
                <p>Out of {this.state.numberOfFlip} flips, there have been {this.state.head} heads and {this.state.tail} tails.</p>
            </div>
        )
    }
}
