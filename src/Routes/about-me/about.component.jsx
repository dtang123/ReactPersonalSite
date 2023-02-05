import { EducationContainer, SubContainer, PageContainer, SkillsContainer, ButtonContainer } from './about.styled'
import { ContentContainer } from "../home/home.styles"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Resume from '../../assets/Current-Resume.pdf'


const About = () => {
  return (
    <PageContainer>
      <EducationContainer>
        <h1>Education</h1>
        <SubContainer>
          <h3><b>Purdue University</b></h3>
          <br/>
          <h6>&emsp;&emsp; BS Computer Science</h6>
          <h6>&emsp;&emsp; West Lafayette, IN</h6>
          <h6>&emsp;&emsp; Expected May 2026</h6>
          <br/>
        </SubContainer>
        <SubContainer>
          <h3><b>Dublin Jerome High School</b></h3>
          <br/>
          <h6>&emsp;&emsp; Dublin, OH</h6>
          <h6>&emsp;&emsp; 2018 - 2022</h6>
        </SubContainer>
      </EducationContainer>
      <hr/>
      <SkillsContainer>
        <h1>Skills</h1>
        <SubContainer>
          <h6>Languages</h6>
          <Row className="skill-row" xs={2} md={4} lg={6}>
            <Col sm={{span:1, offset: 1}} className="skill">
              &#x2022; Python
            </Col>
            <Col sm={{span:1, offset: 1}} className="skill">
              &#x2022; Java
            </Col>
            <Col sm={{span:1, offset: 1}} className="skill">
              &#x2022; Javascript
            </Col>
            <Col sm={{span:1, offset: 1}} className="skill">
              &#x2022; HTML
            </Col>
            <Col sm={{span:1, offset: 1}} className="skill">
              &#x2022; CSS
            </Col>
            <Col sm={{span:1, offset: 1}} className="skill">
              &#x2022; C++
            </Col>
            <Col sm={{span:1, offset: 1}} className="skill">
              &#x2022; SQL
            </Col>
          </Row>
        </SubContainer>
        <SubContainer>
          <h6>Technologies/Frameworks</h6>
          <Row className="skill-row" xs={2} md={4} lg={6}>
          <Col sm={{span:1, offset: 1}} className="skill">
              &#x2022; React
            </Col>
            <Col sm={{span:1, offset: 1}} className="skill">
              &#x2022; Flask
            </Col>
            <Col sm={{span:1, offset: 1}} className="skill">
              &#x2022; Bootstrap
            </Col>
            <Col sm={{span:1, offset: 1}} className="skill">
              &#x2022; Git
            </Col>
            <Col sm={{span:1, offset: 1}} className="skill">
              &#x2022; SQL Alchemy
            </Col>
            <Col sm={{span:1, offset: 1}} className="skill">
              &#x2022; APIs
            </Col>
          </Row>
        </SubContainer>
        <br/>
        <p>Hoping to branch out into cybersecurity and machine learning</p>
        <ButtonContainer>
          <Button className="resume-button" variant="btn btn-info" href={Resume} target="_blank" rel="noreferrer">View Resume</Button>
        </ButtonContainer>
      </SkillsContainer>
    </PageContainer>
  )
}

export default About;
