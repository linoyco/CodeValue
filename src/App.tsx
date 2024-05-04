import React from 'react';
import './App.css';
import MyCard, { MyProps } from './MyCard';

const App = () => {
  const [cardsArr, setCardsArr] = React.useState<MyProps[]>([]);

  React.useEffect(() => {
    setCardsArr([{
      title: '1 Card',
      content: 'שקיעה בקוטב הצפוני',
      date: new Date('2019-08-01T21:00:00'),
      img: 'https://www.photo-art.co.il/wp-content/uploads/2015/07/BY1A4923.jpg'
    },
    {
      title: '2 Card',
      content: 'שקיעה בים',
      date: new Date('2021-08-01T21:00:00'),
      img: 'https://www.photo-art.co.il/wp-content/uploads/2017/10/SY201605-139194.jpg'
    },
    {
      title: '3 Card',
      content: 'שקיעה בפרדס בין העצים',
      date: new Date('2013-08-01T21:00:00'),
      img: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/211823/original/4efc0cc432f26ae286803a3316a02060.jpg?1511253016'
    },
    {
      title: '4 Card',
      content: 'שקיעה בורוד',
      date: new Date('2011-08-01T21:00:00'),
      img: 'https://images1.ynet.co.il/PicServer5/2019/02/14/9065019/906501001001599640360no.jpg'
    },
    {
      title: '5 Card',
      content: 'השקיעה הכי יפה',
      date: new Date('2012-08-01T21:00:00'),
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuE7z_0LE49qNa2HflAgr3RLStPoFF9b0UOtXEZ8BTA&s'
    }])
  }, []);

  const sortArrClicked = () => {
    let sortedArr: MyProps[] = [...cardsArr];

    sortedArr.sort(function (a, b) {
      let dateA = new Date(a.date).valueOf();
      let dateB = new Date(b.date).valueOf();
      return dateA - dateB;
    });

    setCardsArr(sortedArr);
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <h1>Tal</h1>
        <button onClick={() => sortArrClicked()} style={{ width: '200px', height: '60px', fontSize: '24px', fontWeight: 'bold' }}>Sort Array</button><br />
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          {cardsArr.map((item, idx) => {
            return <MyCard
              key={idx}
              title={item.title}
              content={item.content}
              date={item.date}
              img={item.img}
            />;
          })
          }
        </div>
      </div>
    </div>
  );
}

export default App;