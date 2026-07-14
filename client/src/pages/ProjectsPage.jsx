import Description from '../components/Description/Description'
import Card from '../components/Cards/Card'
import getArtwork from '../api/getArtwork'
import styles from './ProjectsPage.module.css'
import { useState, useEffect } from 'react'
import { CategoryTab, FilterTab } from '../components/Tabs/Tabs'

function ProjectsPage({ title }) {

    const [activeTab, setActiveTab] = useState('All')
    const [artwork, setArtwork] = useState([])
    // const [projects, setProjects] = useState([])

    const descriptions = {
        webDesc: "A collection of all the projects I've built",
        artworkDesc: 'Browse my collection of recent artworks'
    }

    const tabs = {
        artTabs: ['All', 'Character', 'Environment', 'Props', 'Hard Surface','Abstract', 'Product Visualizaton'],
        webTabs: ''
    }

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

    return (
        <div className={styles.page}>
            <Description 
                title={title}
                description={title === '3D Artwork' ? descriptions.artworkDesc : descriptions.webDesc}
            />

            <div className={styles.category_container}>
                {tabs.artTabs.map(tab => (
                    <CategoryTab 
                        key={tab}
                        category={tab}
                        active={activeTab}
                        setActiveTab={setActiveTab} />
                    ))
                }
            </div>

            <div className={styles.filter}>
                <FilterTab choice='All' />
            </div>

            <section className={styles.content}>
                {artwork && artwork.map(artwork => (
                    <Card 
                        key={artwork.id}
                        title={artwork.title}
                        description={artwork.description}
                        category={artwork.category}
                        style={artwork.style}
                        image={artwork.image} 
                    />
                ))}
            </section>
        </div>
    )
}

export default ProjectsPage