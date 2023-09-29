import './styles/style.css';
import Modal from './components/Modal';
import IdeaForm from './components/ideaForm';
import IdeaList from './components/IdeaList';

const ideaList = new IdeaList();
ideaList.render();
const modal = new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
