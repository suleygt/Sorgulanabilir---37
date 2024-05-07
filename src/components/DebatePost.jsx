import { useState } from 'react'
import PostComments from './PostComments'
import PostContent from './PostContent'
import postData from '../postData'

export default function DebatePost() {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    userName: '',
    commentText: '',
    isAnonymous: false
  });

  const handleInputChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      userName: formData.isAnonymous ? 'AnonimKullanici' : formData.userName,
      commentText: formData.commentText,
      isAnonymous: formData.isAnonymous
    };
    setComments(prevComments => [...prevComments, newComment]);
    setFormData({
      userName: '',
      commentText: '',
      isAnonymous: false
    });
  };

  
  /* Challenge 

Form çalışmıyor. Göreviniz, kullanıcı "Gönder "e tıkladığında gönderiye bir yorum ekleyen kontrollü bir form yapmaktır.

    1. Yorum, yorum dizisinin alt kısmında, girilen kullanıcı adı ve yorum metni önceki yorumlar gibi görüntülenecek şekilde görünmelidir. 
       
    2. Yorum, önceki yorumların verilerini içeren array'e eklenmelidir. 
    
    3. Girilen kullanıcı adı kaydedilmeli, ancak kullanıcı onay kutusunu işaretlerse "AnonimKullanıcı" olarak görünmelidir.
    
    4. Kullanıcı formu göndermek için text input elemanına ve comment box elemanına metin girmek zorunda olmalı ve kullanıcı bir yorum gönderdikten sonra elemanlar ve onay kutusu temizlenmelidir. Sayfa yüklendiğinde de boş olmalıdırlar.   
        
    5. Kodunuz tamamen bu dosyanın içinde yer alabilir, ancak isterseniz bazı kısımları taşıyabilirsiniz. 

*/

  

  
  return (
    <div className='post-container'>
      <PostContent data={{ ...postData }} />
      <PostComments data={comments} />
      <form onSubmit={handleSubmit}>
        <input
          className='text-input'
          type='text'
          placeholder='Kullanıcı adı girin.'
          name='userName'
          value={formData.userName}
          onChange={handleInputChange}
        />
        <textarea
          placeholder='Ne düşünüyorsunuz?'
          name='commentText'
          value={formData.commentText}
          onChange={handleInputChange}
        />
        <label>
          <input
            className='checkbox'
            type='checkbox'
            name='isAnonymous'
            checked={formData.isAnonymous}
            onChange={handleInputChange}
          />
          İsimsiz mi göndereyim?
        </label>
        <button type='submit'>Gönder</button>
      </form>
    </div>
  );
}
