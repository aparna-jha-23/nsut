import "./newdepression.css"
import depressionbg from '../assests/depressionbg.jpg'
// import { MdLocalHospital } from "react-icons/Md";
// import {FaHandHoldingMedical} from "react-icons/Fa";
const DepressNew = () => {
    return(
        <div className="newdepress-container">
            <div className="depressbg">
            <div className="depressheader">
                <h1>SEEK HELP WITH US!</h1>

            </div>

            </div>
            
            <div className="talktosomeone">
                <h2>TALK TO SOMEONE NOW !</h2>
                <div className="helplinescards">
                    <div className="helplinecard">
                        {/* <FaHandHoldingMedical/> */}
                            <h5 className="headingd" >NIMHANS Psychosocial Support Helpline</h5><br></br>
                            <p className="info">Open 24/7<br></br><br></br>
                            Counselors<br></br><br></br>
                            080-46110007</p><br></br>
                            <a className="depressbutton" href="https://nimhans.ac.in/" target="_blank">nimhans.ac.in</a>
                    </div>
                    <div className="helplinecard">
                        <h5 className="headingd" >NIMHANS Psychosocial Support Helpline</h5><br></br>
                            <p className="info">Open 24/7<br></br><br></br>
                            Counselors<br></br><br></br>
                            080-46110007</p><br></br>
                            <a className="depressbutton" href="https://nimhans.ac.in/" target="_blank">nimhans.ac.in</a>
                    </div>
                    <div className="helplinecard">
                        <h5 className="headingd" >NIMHANS Psychosocial Support Helpline</h5><br></br>
                            <p className="info">Open 24/7<br></br><br></br>
                            Counselors<br></br><br></br>
                            080-46110007</p><br></br>
                            <a className="depressbutton" href="https://nimhans.ac.in/" target="_blank">nimhans.ac.in</a>
                    </div>
                </div>
            </div>
            <div className="servicesbox">
                <h2> SERVICES</h2>
                <div className="servicesd">
                    <div className="griditem">
                        <h4>Getting Help</h4>
                        <p>When you reach out to others, you can receive emotional support and encouragement. This can help you feel less alone and more hopeful about the future. People who are supportive can also help you make a plan to get the help you need to manage your depression.</p>
                        <a className="learnmored" href="https://www.vandrevalafoundation.com/" target="_blank">LEARN MORE</a>
                    </div>
                    <div className="griditem">
                        <h4>Breaking Isolation</h4>
                        <p>Depression can make you feel isolated and alone, but talking to someone can help you break out of that cycle of isolation and loneliness. When you reach out to others, you can start to build a supportive network of friends and family members who care about you.</p>
                        <a className="learnmored" href="https://www.vandrevalafoundation.com/" target="_blank">LEARN MORE</a>
                    </div>
                    <div className="griditem">
                        <h4>Encouraging self care</h4>
                        <p>Talking about your feelings with a trusted friend or family member, or a mental health professional, can help you better understand your depression and develop a plan to manage it. With the right support and treatment, you can begin to feel better and overcome your depression.</p>
                        <a className="learnmored" href="https://www.vandrevalafoundation.com/" target="_blank">LEARN MORE</a>
                    </div>
                    <div className="griditem">
                        <h4>Reducing Stigma</h4>
                        <p>Depression can make you feel isolated and alone, but talking to someone can help you break out of that cycle of isolation and loneliness. When you reach out to others, you can start to build a supportive network of friends and family members who care about you.

</p>
                        <a className="learnmored" href="https://www.vandrevalafoundation.com/" target="_blank">LEARN MORE</a>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default DepressNew;