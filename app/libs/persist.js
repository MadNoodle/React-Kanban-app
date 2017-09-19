export default function(alt, storage, storageName){
  try {
    alt.bootsrap(storage.get(storageName));

  } catch (e) {
    console.log( 'failed to bootstrap data', e);
  }
  alt.FinalStore.listen(() => {
    if(!storage.get('debug')){
      storage.set(storageName, alt.takeSnapshot());
    }
  })
}
