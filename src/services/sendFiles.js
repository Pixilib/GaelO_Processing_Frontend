const sendfiles={
    sendFiles(){
        return fetch('http://locahost8001/app/images', {
            method: 'POST',
            headers: {
              Accept: 'image/nii',
              'Content-Type': 'image/nii'
            }
            // ,
            // body: JSON.stringify({
            //   name:'Nicolas'
            // })
          }).then( (answer) => {
            return (answer.json())
          }).catch((error) => { throw error })
        },
  }
