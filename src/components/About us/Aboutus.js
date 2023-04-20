import '../About us/Aboutus.css'
import Card from 'react-bootstrap/Card';

function Aboutus() {
  return (
    <div className='aboutuscards'>

      
        <Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/125543426?v=4" />
          <Card.Body>
            <Card.Title>Firas Awadallah</Card.Title>
            
          </Card.Body>
        </Card>
      

      
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/125884781?v=4" />
        <Card.Body>
          <Card.Title>Sajeda Alrababah</Card.Title>
          
        </Card.Body>
      </Card>
      
     
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src="https://images-ext-2.discordapp.net/external/B7F5sjtnMUQPbIq_CUsx0BprlQDIpDp8fqXJ3k7I3dQ/https/i.pinimg.com/736x/1a/4a/97/1a4a97fa0e971a5a94f4bffaeb8a3662.jpg?width=437&height=473" />
        <Card.Body>
          <Card.Title>Zekra Quraan</Card.Title>
        
        </Card.Body>
      </Card>
      
      
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src="https://ca.slack-edge.com/TNGRRLUMA-U04PA8EC6ET-3c0112671aa0-512" />
        <Card.Body>
          <Card.Title>Ibraheem Areeda</Card.Title>
         
        </Card.Body>
      </Card>
     
     
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src="https://cdn.dribbble.com/users/1011253/screenshots/5273185/media/3d51fe34647f010d75771ca24f4ff66a.png" />
        <Card.Body>
          <Card.Title>Ayman Malkawi</Card.Title>
        
        </Card.Body>
      </Card>
   



    </div>







  );
}

export default Aboutus;