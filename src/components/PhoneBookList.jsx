import React from 'react'
import styled from 'styled-components'
import PhoneBookInfo from './PhoneBookInfo'


const Styled = {
    Body: styled.div`
        display : flex;
        flex-direction : column;
        width : 600px;
        margin : 30px auto;
        
        align-items: center;
        justify-content: center;

    `,

    PhoneBookInfoWrapper: styled.div`
        display : flex; 
        width : 100%;
        margin-bottom : 15px;
        :last-child {
            margin-bottom : 0;
        }
    `
}

const PhoneBookList = (props) => {

    const { onChange, infos, onClickEditButton, remove } = props

    const list = infos.map((res, i) => {
        return (
            <Styled.PhoneBookInfoWrapper
                key={i}
            >
                <PhoneBookInfo 
                    onChange={onChange}
                    info={res}
                    onClickEditButton={onClickEditButton}
                    remove={remove}
                />
            </Styled.PhoneBookInfoWrapper>
        )
    })
    return (
        <Styled.Body>
            {list}
        </Styled.Body>
    )
}

export default PhoneBookList