import React from 'react'
import styled from 'styled-components'

const Styled = {
    Body: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : 100%;
        border : 2px solid #000000;
        padding : 24px;
        flex-direction : column;
        font-weight: bold;
    `,
    Row: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width : 100%;
        margin-bottom : ${props => props.bottom}px;
        margin-top: 30px;
    `,
    Col: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : ${props => props.width}%;
    `
}

const PhoneBookInfo = (props) => {

    const { onChange, info, onClickEditButton, remove } = props

    const addDate = (e) => {
        onChange(e, info.id)
    }

    const handleRemove = () => {
        remove(info.id)
    }


    return (
        <Styled.Body>
            {
                info.isEditing ? (
                    <>
                        <input
                            type="text"
                            name="name"
                            value={info.name}
                            onChange={addDate}
                        />
                        <input
                            type="number"
                            name="phoneNumber"
                            value={info.phoneNumber}
                            onChange={addDate}
                        />
                    </>
                ) : (
                    <>
                        <b>이름 : {info.name}</b>
                        <b>전화번호 : {info.phoneNumber}</b>
                        <b>입력날짜: {info.isDate}</b>
                    </>
                )
            }

<Styled.Row>
    <button
        onClick={e => {
            e.preventDefault()
            onClickEditButton(info.id)
        }}
    >
        {info.isEditing ? '저장하기' : '수정하기'}
    </button>
    <button
        onClick={handleRemove}
    >삭제하기</button>
</Styled.Row>
        </Styled.Body >
    )

}

export default PhoneBookInfo