import styled from 'styled-components'

export const PageContainer = styled.div`
    margin: 50px
`

export const EducationContainer = styled.div `
    margin-bottom: 50px;
`

export const SubContainer = styled.div `
    margin: 50px 0 50px 0;
    padding: 40px 40px;
    background-color: #C4DCE0;
    border-radius: 8px;
    border: solid;
    align-items: center;
`

export const SkillsContainer = styled(EducationContainer) `
    & .skill-row {
        & .skill {
            margin: 20px 20px 20px 20px;
            border-radius: 5px;
        }
    }
`

export const ButtonContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`
