import React, { Component } from 'react'
import './Article.css'
import Kazi from '../assets/image/kazi.jpg'
import Star from '../assets/icon/star.png'
import Wiki from '../assets/icon/wikipidea.png'
import Youtube from '../assets/icon/youtube.png'
import Amazon from '../assets/icon/amazon.png'
interface Props {


}
interface State {


}
export default class Article extends Component<Props, State> {
    render() {
        return (
            <div>
                <div className='home_page'>
                    <nav>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Acheivement</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='title'>
                    <h1>Kazi Nazrul Islam</h1>
                    <h2>The national poet of Bangaladesh</h2>
                </div>

                <div className='about'>
                    <div className='story1'>
                        <div className='part1'>
                            <h3>Rebel Poet</h3>
                            <p> Kazi Nazrul Islam is the national poet of Bangladesh who is<br></br>
                                especially recognized as a Bidrohi Kobi (rebel poet) around the<br></br>
                                country. Nazrul is a famous poet, musician and philosopher of<br></br>
                                Bangladesh. The famous poet Nazrul's writings deal with the<br></br>
                                revolution of that period of the British government. His<br></br>
                                revolutionary attempt helped him to be a national poet of<br></br>
                                Bangladesh. He has raised his voice against any kinds of fascism<br></br> and
                                oppression and got popularity swiftly around the Indian<br></br>
                                Subcontinent.</p>
                        </div>
                        <div className='part2'>
                            <h3>Awesome Writter</h3>
                            <p>
                                Nazrul's writings explored themes such as love, freedom, humanity,<br></br>
                                and revolution. He opposed all forms of bigotry and<br></br>
                                fundamentalism, including religious, caste-based and gender-based.<br></br>
                                Throughout his career, Nazrul wrote short stories, novels, and<br></br>
                                essays but is best known for his songs and poems. He pioneered <br></br>new
                                music forms such as Bengali ghazals. Nazrul wrote and composed
                                music for nearly 4,000 songs (many recorded on HMV and
                                gramophone records), collectively known as Nazrul Geeti.
                            </p>
                        </div>
                    </div>
                    <div className='image'>
                        <img src={Kazi}></img>
                    </div>
                    <div className='buttons'>
                        <button className='wiki'><img src={Wiki}></img>Learn More</button>
                        <button className='you'><img src={Youtube}></img>Videos</button>
                        <button><img src={Amazon}></img>Books</button>

                    </div>
                </div>
                <div className='quote'>
                    <h4>"Love has no meaning or amount."-Kazi Nazrul Islam</h4>
                </div>
                <div className='achieve'>
                    <div className='head'>
                        <h5>Awards</h5>
                    </div>
                    <div className='tabs'>
                        <div className='tab1'>
                            {/* <h6>Jagattarini Gold Medal</h6>                           
                            <p className='year1'>1945</p>
                            <p>From the university of calcutta for<br></br> hiswork in rengali literature</p> */}
                            <h6>Jagattarini Gold Medal</h6>
                            <p>1945</p>
                            <div className='para1'>
                                <p>From the university of calcutta for hiswork <br></br>in rengali literature</p>
                            </div>
                        </div>
                        <div className='tab2'>
                            {/* <h6>Padma Bhushan</h6>
                            <p>1960</p>
                            <p>One of the highest civillian honors of the republic of india</p> */}
                            <h6>Padma Bhushan</h6>
                            <p>1960</p>
                            <div className='para2'>
                                <p>One of the highest civillian honors of the republic of india</p>
                            </div>
                        </div>
                        <div className='tab3'>
                            {/* <h6>National Poet</h6>
                            <p>-</p>
                            <p>Conferred the title by the government of Bangladesh</p> */}
                            <h6>National Poet</h6>
                            <p>-</p>
                            <div className='para3'>
                                <p>Conferred the title by the government of Bangladesh</p>
                            </div>
                        </div>
                        <div className='tab4'>
                            {/* <h6>Ekushey Padak</h6>
                            <p>1976</p>
                            <p>Bangladesh's highest civillian honors</p> */}
                            <h6>Ekushey Padak</h6>
                            <p>1976</p>
                            <div className='para4'>
                                <p>Bangladesh's highest civillian honors</p>
                            </div>
                        </div>
                    </div>

                    <div className='books'>
                        <div className='sec1'>
                          <h2>poetry</h2>
                          <ol>
                            <li>Agri Bina(the flery lute),1922</li>
                            <li>Sanchita(collected poems),1925</li>
                            <li>Phanlmeness (the coctus),1927</li>
                            <li>chakrabak(the flamingo),1929</li>
                            <li>satbhai champo(the seven brother of champo),juvenile poems,1933</li>
                            <li>nirjhar(foundation),1939</li>
                            <li>natum chand(the new moon),1939</li>
                            <li>morobhaskar(the sun in the desort),1951</li>
                            <li>sanchayan(collected poems),1955</li>
                            <li>nazrul islam islami kobita(a collection of isalamic poems d)</li>
                          
                          </ol>
                        </div>

                        <div className='sec2'>
                            <h2>poems and songs</h2>
                        </div>
                       
                    </div>
                </div>
            </div>


        )
    }

}