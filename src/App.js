import React, { useState } from 'react'
import styled from 'styled-components'
import PhoneBookList from './components/PhoneBookList'
import AddUser from './components/AddUser'
import SearchUser from './components/SearchUser'
import moment from 'moment'
import 'moment/locale/ko'

const Styled = {
  Body: styled.div`
    display : flex;
    width : 100%;
    flex-direction : column;
  `,
  Container: styled.div`
    display : flex;
    width : 1000px;
    min-height : 1000px;
    margin : auto;
    flex-direction : column;
    background-color : white;
	text-align: center
  `,
  Wrapper: styled.div`
    display : flex;
    width : 100%;
  `,
  Add: styled.div`
	display: flex;
	width: 35%;
	height: 50px;
	align-items: center;
	justify-content: center;
	border: 2px solid black;
	margin : auto;
	`
}

function App() {

  const [searchKeyword, setSearchKeyword] = useState('')


  const [phoneBookInfos, setPhoneBookInfos] = useState([
    {
      isEditing: false,
      id: 0,
      name: '',
      phoneNumber: '',
      isDate: moment().format('YYYY-MM-DD HH:mm:ss')
    },
    {
      isEditing: false,
      id: 1,
      name: '',
      phoneNumber: '',
      isDate: moment().format('YYYY-MM-DD HH:mm:ss'),
    },
  ])

  /* const handleChange = (e) => {
    setPhoneBookInfos({
      ...phoneBookInfos,
      [e.target.name] : e.target.value
    })
  } */

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value)
    /* setPhoneBookInfos((prevState) => {
      return prevState.filter((res) => {
        return res.name.indexOf(e.target.value) > -1
      })
    }) */

  }

  const handleCreate = () => {
    setPhoneBookInfos((prevState) => {
      return prevState.concat(
        {
          isEditing: false,
          id: prevState.length + 1  ,
          name: '',
          phoneNumber: '',
          isDate: moment().format('YYYY-MM-DD HH:mm:ss')
        },
      )
    })
  }

  const handleChange = (e, id) => {
    setPhoneBookInfos((prevState) => {
      return prevState.map((res) => {
        if (res.id === id) {
          return {
            ...res,
            [e.target.name]: e.target.value
          }
        }
        return res
      })
    })
  }

  const handleRemove = (id) => {
    setPhoneBookInfos((prevState) => {
      return prevState.filter(res => res.id !== id)
    })
  }

  const handleClickEditButon = (id) => {
    setPhoneBookInfos((prevState) => {
      return prevState.map((res) => {
        if (id === res.id) {
          return {
            ...res,
            isEditing: !res.isEditing
          }
        }
        return res
      })
    })
  }

  return (
    <Styled.Body>
    <Styled.Add>
      <SearchUser 
        infos={searchKeyword}
        onChange={handleSearch}
      />
    </Styled.Add>
      <Styled.Add>
        <AddUser
          onClick={handleCreate}
        />
      </Styled.Add>
      <Styled.Container>
        <Styled.Wrapper>
          <PhoneBookList
            infos={phoneBookInfos.filter((res) => {
              return res.name.indexOf(searchKeyword) > -1
            })}
            onChange={handleChange}
            onClickEditButton={handleClickEditButon}
            remove={handleRemove}
          />
        </Styled.Wrapper>
      </Styled.Container>
    </Styled.Body>
  );
}

export default App;
