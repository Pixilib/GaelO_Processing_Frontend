const sendfiles={
    sendImgFiles(stringImg){
        return fetch('/app/images', {
            method: 'POST',
            headers: {
              Accept: 'image/nii',
              'Content-Type': 'image/nii'
            }
            ,
            body: stringImg
          }).then( (answer) => {
            return (answer.json())
          }).catch((error) => { throw error })
        },
        sendMaskFiles(stringImg){
          return fetch('/app/masks', {
              method: 'POST',
              headers: {
                Accept: 'image/nii',
                'Content-Type': 'image/nii'
              }
              ,
              body: stringImg
            }).then( (answer) => {
              return (answer.json())
            }).catch((error) => { throw error })
          },
  }
  export default  sendfiles
