import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connects';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Editable  from './Editable.jsx';

export default connect(()=>({}),{
NoteActions,
LaneActions

})(({lane, LaneActions, note, NoteActions,...props}) => {
  const addNote = e => {
    e.stopPropagation();

    const noteId = uuid.v4();

    NoteActions.create({
      id: noteId,
      task: 'New task'
    });
    LaneActions.attachToLane({
      laneId: lane.id,
      noteId
    });
   };

  const activateLaneEdit = () => {
   LaneActions.update({
     id: lane.id,
     editing: true
   });
 };

 const editName = name => {
   LaneActions.update({
     id: lane.id,
     name,
     editing: false
   });
 };
 const deleteLane = (laneId, e) => {
   e.stopPropagation();
   LaneActions.delete(lane.id);

 };

  return (
      <div className="lane-header" onClick={activateLaneEdit} {...props}>
        <div className="lane-add-note">
          <button onClick={addNote}>+</button>
        </div>
        <Editable className='lane-name' editing={lane.editing} value={lane.name} onEdit={editName}/>
        <div className="lane-delete">
        <button onClick={deleteLane}>o</button>
        </div>
      </div>
    );
  })
