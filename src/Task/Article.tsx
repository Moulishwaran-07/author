import React, { Component } from 'react'
import './Article.css'
import Kazi from '../assets/image/kazi.jpg'
import Star from '../assets/icon/star.png'
import Wiki from '../assets/icon/wikipidea.png'
import Youtube from '../assets/icon/youtube.png'
import Amazon from '../assets/icon/amazon.png'

export default class Article extends Component {
    render() {
        return (
            <div>
                <div className='all'>
                    <div className='home_page'>
                        <nav>
                            <ol>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>About</a></li>
                                <li><a href='#'>Acheivement</a></li>
                            </ol>
                        </nav>

                        <div className='title'>
                            <h1>Kazi Nazrul Islam</h1>
                            <h2>The national poet of Bangaladesh</h2>
                        </div>
                    </div>
                    <div className='about'>
                        <div className='story1'>
                            <div className='part1'>
                                <h3>Rebel Poet</h3>
                                <p> Kazi Nazrul Islam is the national poet of Bangladesh who is
                                    especially recognized as a Bidrohi Kobi (rebel poet) around the
                                    country. Nazrul is a famous poet, musician and philosopher of
                                    Bangladesh. The famous poet Nazrul's writings deal with the
                                    revolution of that period of the British government. His
                                    revolutionary attempt helped him to be a national poet of
                                    Bangladesh. He has raised his voice against any kinds of fascism and
                                    oppression and got popularity swiftly around the Indian
                                    Subcontinent.</p>
                            </div>
                            <div className='part2'>
                                <h3>Awesome Writter</h3>
                                <p>
                                    Nazrul's writings explored themes such as love, freedom, humanity,
                                    and revolution. He opposed all forms of bigotry and
                                    fundamentalism, including religious, caste-based and gender-based.
                                    Throughout his career, Nazrul wrote short stories, novels, and
                                    essays but is best known for his songs and poems. He pioneered new
                                    music forms such as Bengali ghazals. Nazrul wrote and composed
                                    music for nearly 4,000 songs,collectively known as Nazrul Geeti.
                                </p>
                            </div>
                        </div>
                        <div className='image'>
                            <img src={Kazi}></img>
                        </div>
                        <div className='buttons'>

                            <button className='wiki'>Learn More</button>
                            <button className='you'>Videos</button>
                            <button className='amazon'>Books</button>

                        </div>
                    </div>
                    <div className='quote'>
                        <h4>"Love has no meaning or amount."-Kazi Nazrul Islam</h4>
                    </div>
                    <div className='achieve'>
                        <div className='head'>
                            <h5>----------------------------  Awards  -----------------------------</h5>
                        </div>
                        <div className='tabs'>
                            <div className='tab1'>
                                <h6>Jagattarini Gold Medal</h6>
                                <p>1945</p>
                                <div className='para1'>
                                    <p>From the university of calcutta for hiswork <br></br>in rengali literature</p>
                                </div>
                            </div>
                            <div className='tab2'>
                                <h6>Padma Bhushan</h6>
                                <p>1960</p>
                                <div className='para2'>
                                    <p>One of the highest civillian honors <br></br>of the republic of india</p>
                                </div>
                            </div>
                            <div className='tab3'>
                                <h6>National Poet</h6>
                                <p>-</p>
                                <div className='para3'>
                                    <p>Conferred the title by the government <br></br>of Bangladesh</p>
                                </div>
                            </div>
                            <div className='tab4'>
                                <h6>Ekushey Padak</h6>
                                <p>1976</p>
                                <div className='para4'>
                                    <p>Bangladesh's highest civillian honors</p>
                                </div>
                            </div>
                        </div>

                        <div className='books'>
                            <div className='sec1'>
                                <h2>---------- Poetry ----------</h2>
                                <ul>
                                    <li>Agri Bina(the flery lute),1922</li>
                                    <li>Sanchita(collected poems),1925</li>
                                    <li>Phanlmeness (the coctus),1927</li>
                                    <li>chakrabak(the flamingo),1929</li>
                                    <li>satbhai champo(the seven brother of champo),juvenile poems,1933</li>
                                    <li>nirjhar(foundation),1939</li>
                                    <li>natum chand(the new moon),1939</li>
                                    <li>morobhaskar(the sun in the desort),1951</li>
                                    <li>sanchayan(collected poems),1955</li>
                                    <li>nazrul islam islami kobita(a collection of isalamic poems;dinaka,Bangladesh <br></br>isalamic foundation,1982)</li>

                                </ul>
                            </div>

                            <div className='sec2'>
                                <h2>---------- Poems and songs ----------</h2>
                                <ul>
                                    <li>Dollan chapa(name of a taintly tragment mansoon flower),1923</li>
                                    <li>Bisher boshi(the poison flute),1924</li>
                                    <li>bhangar gan(the song of destruction),1924 proscribe in 1924</li>
                                    <li>chhayanat(the raga of chhayant)</li>
                                    <li>chittanama(on chittarajan),1925</li>
                                    <li>samyabadi(the prociaimer of equality),1926</li>
                                    <li>puber haws(the eastern wind),1926</li>
                                    <li>sarbahara(the prolotariot),1926</li>
                                    <li>sindhu hindhu(the undulation of the sea),1927</li>
                                    <li>jinji(chain),1928</li>
                                    <li>pralaya shidha(doomsday flame),1930 prascribled in 1930</li>
                                    <li>shesh (the last offering),1958</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='foot_view'>
                        <div className='footer'>
                            <div className='foot1'>
                                <h2>About The Author</h2>
                                <p>Made by Md.Abu Taher for a Freecodecamp tribute challenge</p>
                            </div>
                            <div className='foot2'>
                                <h2>Tech Used</h2>
                                <p>Sementic UI</p>
                            </div>
                            <div className='foot3'>
                                <h2>Content Disclaimer</h2>
                                <p>The content of this website is mostly copied from wikipedia,biographyhd,thetamouspeople.(original <br></br>credit goes to the respective author)</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }

}