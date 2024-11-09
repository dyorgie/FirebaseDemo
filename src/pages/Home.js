import { Link, useNavigate } from 'react-router-dom'
import {getDocs, collection, deleteDoc, doc, onSnapshot, updateDoc} from 'firebase/firestore';
import {db} from '../firebase/config'
import { useEffect,useState } from 'react';
import DeleteIcon from '../assets/delete.svg'

// styles
import './Home.css'

export default function Home() {

  const [articles, setArticles] = useState(null);
  const [editArticle, setEditArticle] = useState(null);
  const [formData, setFormData] = useState({ title: '', author: '', description: '' });
  const navigate = useNavigate(); 

  useEffect(() => {
    const ref = collection(db, 'articles');

    onSnapshot(ref, (snapshot)=>{
        console.log(snapshot);
        let results = []
         snapshot.docs.forEach(doc => {
           results.push({id: doc.id, ...doc.data()});
         });
        setArticles(results);
      })

    getDocs(ref)
      .then((snapshot)=>{
        let results = []
        console.log(snapshot)
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()});
        });
        setArticles(results);
      })    
  },[])

  const handleDelete = async (id) => {
    const refDoc = doc(db, 'articles', id)
      //loading = true
    deleteDoc(refDoc).then(
        //loading false;
    );
  }

  const handleEdit = (article) => {
    setEditArticle(article);
    setFormData({
      title: article.title,
      author: article.author,
      description: article.description
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="home">
      <h2>Articles</h2>

      {articles && articles.map((article) => (
        <div key={article.id} className="card">
          <h3>{article.title}</h3>
          <p>Written by {article.author}</p>
          <Link to={`/articles/${article.id}`}>Read More...</Link>
          
          {/* Edit Button */}
          <button onClick={() => handleEdit(article)}>Edit Article</button>

          {/* Delete Button */}
          <img
            className="icon"
            onClick={() => handleDelete(article.id)}
            src={DeleteIcon}
            alt="delete icon"
          />
        </div>
      ))}

      {/* Edit Form */}
      {editArticle && (
        <div className="edit-form">
          <h3>Edit Article</h3>
          <form onSubmit={handleEdit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input
                type="textfield"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Save Changes</button>
            <button  type="button" onClick={() => setEditArticle(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
