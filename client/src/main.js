import './styles/style.css';
import Modal from './components/Modal';
import IdeaForm from './components/ideaForm';
import IdeaList from './components/IdeaList';

new IdeaList();
// ideaList.render();
new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
