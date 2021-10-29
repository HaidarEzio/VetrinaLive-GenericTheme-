import { useCallback } from 'react'
import isEmpty from 'lodash/fp/isEmpty'
import get from 'lodash/fp/get'
import noPreview from 'public/imgs/nopreview.png'

function useGetMainProductPicture() {
  return useCallback(({ pictures = [], videos = [] }) => {
    const hasPictures = !isEmpty(pictures)
    const hasVideos = videos.length > 0

    // todo get main video when BE ready
    // todo get different sizes of video thumbnail
    const mainVideoThumbnailUrl = videos[0]?.thumbnail_url

    let mainPic = pictures.find((i) => get('main', i)) || pictures[0]

    // case when no main picture found
    if (!hasPictures || !mainPic) {
      // before return placeholder, lets try get picture from videos
      if (hasVideos && !isEmpty(mainVideoThumbnailUrl)) {
        return {
          ...mainPic,
          '50x50': mainVideoThumbnailUrl,
          '500x600': mainVideoThumbnailUrl,
          '1000x1200': mainVideoThumbnailUrl
        }
      }

      // no picture after checking videos, lets return placeholder
      mainPic = {
        id: noPreview,
        main: true,
        '50x50': noPreview,
        '500x600': noPreview,
        '1000x1200': noPreview
      }
    }

    return mainPic
  }, [])
}

export default useGetMainProductPicture
