import { Link, useLocation } from 'react-router-dom'
import './menu.css'
import styled from 'styled-components'
import { useState } from 'react'


interface Props{
    cor: string
}

export default function Menu() {
    const linkAtual = useLocation()
    return(
        <MenuSld>
            {/* {
                linkAtual.pathname === "/lotofacil" ? 
                <LinkSld/> : <Linklotofacil/>
            } */}
            <LinkSld cor={'930089'} to={"/timemania"}> Timemania</LinkSld>
            <LinkSld cor={'209869'} to={"/megasena"} > Megasena</LinkSld>
            <LinkSld cor={'260085'} to={"/quina"} > Quina</LinkSld>
        </MenuSld>
    )
}

// 'link-cor':' link linklotofacil'

const MenuSld = styled.div`
    margin-top: 1%;
    margin-left: 5.5%;
`
const LinkSldD = styled.link`
color: #ddd;
pointer-events: none;
text-decoration: none;
font-size: 18px;
padding: 12px;
`
const LinkSld = styled(Link)<Props>`
text-decoration: none;
color: ${(props) => props.cor};
padding: 12px;
font-size: 18px;
`

/*

.linklotofacil{
    text-decoration: none;
	color: #930089;
	padding: 12px;
    font-size: 18px;
}

.linkmegasena{
    text-decoration: none;
	color: #209869;
	padding: 12px;
    font-size: 18px;
}

.linkquina{
    text-decoration: none;
	color: #260085;
	padding: 12px;
    font-size: 18px;
}



.link:hover{
    color: rgba(225, 225, 255, 0.5);
}  


.link-cor {
    color: #ddd;
    pointer-events: none;
    text-decoration: none;
    font-size: 18px;
    padding: 12px;
}
*/