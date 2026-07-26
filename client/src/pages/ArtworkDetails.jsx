import Description from '../components/Description/Description'
import ScrollContainer from '../components/ScrollContainer/ScrollContainer'
import SuggestionCard from '../components/Cards/SuggestionCard'
import ArtPopUpCard from "../components/Cards/ArtPopUpCard"
import { BackButton } from '../components/Buttons/Buttons'
import { FilterTab } from '../components/Tabs/Tabs'
import { Maximize2, Minimize2, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import getArtwork from '../api/getArtwork'
import imageSrc from '../data/imageSrc'
import styles from './ArtworkDetails.module.css'


export default function ArtworkDetails() {

    const title = 'yuji itadori'
    const artTabs = ['Blender', 'Maya', 'Unreal', 'Unity', 'Godot','Krita', 'DaVinci Resolve']
    const [artwork, setArtwork] = useState([])
    const [isExpanded, setIsExpanded] = useState(false)


    useEffect(() => {
        (async function fetchArtwork() {
            try {
                const artworks = await getArtwork()

                if (Array.isArray(artworks)) {
                    await setArtwork(artworks)
                } else {
                    throw new Error('could not find artwork', artworks)
                }
                
            } catch (e) {
                console.error('Error fetching products', e)
            }  
        })()
    }, [])

    function handleLineBreak(text) {
        let wordArray = text.toUpperCase().split(' ')

        if(wordArray.length >= 2) {
            let [firstWord, secondWord, ...rest] = wordArray
            let first = firstWord.length
            let second = secondWord.length
            
            if(first >= 5 && second >= 6 && first !== second) {
                return (
                    <div>{firstWord} <br /> {`${secondWord} ${rest.join(' ')}`}</div>
                )
            }
        }

        return text.toUpperCase()
    }

    function expand() {
        isExpanded ? setIsExpanded(false) : setIsExpanded(true)
    }


    return (
        <div className={styles.page}>
            <section className={styles.info}> {/*Left section of the page that contains info and images */}
                <BackButton path='/3d-artwork' />

                <h1>{handleLineBreak(title)}</h1>

                <div className={styles.decoration}>
                    <div className={styles.divider}></div>
                    <div className={styles.categories}>
                        <p>{'character'.toUpperCase()}</p> 
                        <p>{'game ready'.toUpperCase()}</p>
                    </div>
                </div>
        
                <Description 
                    tabs={artTabs}
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio nec augue 
                    vehicula pretium non ut diam. Vestibulum et rhoncus nulla, id vulputate elit.'
                />

                <div className={styles.image_container}>
                    {imageSrc.map(image => (
                            <div key={image.id}>
                                <img src={image.url} alt='artwork image' />
                                <button><Maximize2 size={16} /></button>
                            </div>
                        )
                    )}
                </div>
            </section>

            <section className={styles.showcase}> {/* Right section of the page that contains project showacase */}
                    <div className={styles.background_art}></div>
                    <div className={styles.art}></div>

                    <div className={styles.more}>
                        <div className={styles.head}> 
                            <p>More Projects</p> 
                            <FilterTab choice={'All'} /> 

                            <button className={styles.buttons} onClick={() => expand()}>
                                {isExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                            </button> 
                            <button className={styles.buttons}><ChevronRight size={14} /></button> 

                        </div>
                        
                        {
                            isExpanded ? 
                            <ScrollContainer projects={artwork} CardType={ArtPopUpCard} /> :
                            <ScrollContainer projects={artwork} CardType={SuggestionCard} />
                        }
                    </div>
            </section> 
        </div>
    )
}