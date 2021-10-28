import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

function useIsMobile() {
  return useMediaQuery(useTheme().breakpoints.down('sm'))
}

export default useIsMobile
