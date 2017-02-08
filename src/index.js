import '_styles/skeleton.css'

// # IMPORT COMPONENTS
import Button from './button'
import Heading from './heading'
import Grid from './grid'
import List from './list'

const skeleton = {
  Button,
  Heading,
  ...Grid,
  ...List
}

module.exports = skeleton
