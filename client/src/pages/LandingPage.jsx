import { PrimaryButton, SecondaryButton } from '../components/Buttons/Buttons'
import Socials from '../components/Socials/Socials'
import Recent from '../components/Recent/Recent'
import './LandingPage.css'

function LandingPage() {
    return (
        <div className="landing-page">

            <section aria-labelledby='hero-section' className="hero-section"> {/* Grid conatiner */}
                <div className="intro">
                    <h1>Hi, I'm Theodore</h1>
                    <p>Front-End <br /> Developer & 3D Artist</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio nec augue 
                    vehicula pretium non ut diam. Vestibulum et rhoncus nulla, id vulputate elit.
                    </p>

                    <div className="buttons">
                        <PrimaryButton text='Software Projects' />
                        <SecondaryButton text='3D Artwork' />
                    </div>

                    <Socials />
                </div>

                <div className="illustration"></div>
            </section>
            
            <Recent heading='RECENT PROJECTS' />
        </div>
    )
}

export default LandingPage