import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name':'나동빈',
  'birthday':'961222',
  'gender':'남자',
  'job':'대학생'
},{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name':'홍길동',
  'birthday':'888888',
  'gender':'남자',
  'job':'프로그래머'
},{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name':'이순신',
  'birthday':'010101',
  'gender':'남자',
  'job':'장군'
}]


class App extends Component {
  render () {
    return (
      <div>

        {customers.map(c => {
          // .map 으로 배열을 모두 출력 할 수 있음. map 함수는 키값을 가져야 오류가 안남
          return (
            <Customer
            key={c.id}
            id = {c.id}
            image = {c.image}
            name = {c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}/>
          )})}

      </div>
      )
    }
  }
  
export default App;
