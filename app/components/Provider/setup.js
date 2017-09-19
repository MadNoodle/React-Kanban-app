import NoteStore from '../../stores/NoteStore';
import storage from '../../libs/localStorage';
import LaneStore from '../../stores/LaneStore';
import persist from '../../libs/persist';

export default alt => {
  alt.addStore('NoteStore', NoteStore);
  alt.addStore('LaneStore', LaneStore);
  persist(alt, storage(localStorage), 'app');
}
