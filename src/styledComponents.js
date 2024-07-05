import styled from "styled-components"

export const AppContainer = styled.div`
    min-height: 100vh;
    background-color: #076A7C;
    display: flex;
    justify-content: center;
    padding: 50px;
    @media screen and (max-width: 576px){
        padding: 25px;
    }
`

export const CardContainer = styled.div`
    width: 75%;
    padding: 50px;
    border-radius: 15px;
    background-color: #0C3140;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 576px){
        width: 90%;
    }
`

export const TaskListContainer = styled.ul`
    list-style-type: none;
    padding-left: 0px;
    margin-left: 0px;
    min-width: 98%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const EditContainer = styled.form`
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    @media screen and (max-width: 576px){
     width: 97%;   
    }
`

export const Input = styled.input`
    width: 75%;
    height: 35px;
    background-color: #C5C3BD;
    font-size: 17px;
    border: none;
    border-radius: 15px;
    outline: none;
    cursor: pointer;
    padding: 20px;
    margin-right: 10px;
    @media screen and (max-width: 576px){
     width: 80%;   
    }
`

export const EditButton = styled.button`
    width: 23%;
    height: 35px;
    align-self: center;
    background-color: #8DBD4C;
    color: #F5F7F8;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    margin-right: 10px;
    @media screen and (max-width: 576px){
     font-size: 16px;   
     
    }
`

export const Button = styled.button`
    width: 25px;
    height: 25px;
    background-color: transparent;
    border: none;
    border-radius: 15px;
    margin-right: 10px;
    outline: none;
    cursor: pointer;
`