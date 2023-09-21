import React from 'react'
import Stories from 'react-insta-stories';
import Footer from './Footer';

const Profile = () => {
  const story = [
   
   {
    
    url:'https://drive.google.com/uc?export=views&id=1yyNd_PRVB3nWrzSPJ6vYZSYPRC5LG07u',
    type:'video',
  },
  {
    url: 'http://drive.google.com/uc?export=view&id=1YMXNTRNU7Fn_6hurOvLOg3JzTo-UPsfF',
    type:'video',
    
  
  },
   
  
  ]
  return (
    <>
    <div class="container d-flex justify-content-center " >
    <div class="card p-3 py-4" >
        <div class="text-center " > 
    <Stories
	width={700}
    loop={true}
    stories={story}
			
    
   
        />
     </div>
    </div>
</div>
<Footer/>
    </>
    
  )
}

export default Profile