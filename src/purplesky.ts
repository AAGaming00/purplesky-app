// purplesky patches

import {ActivityIndicator} from 'react-native'

import {colors} from './lib/styles'

// patch RN ActivityIndicator to use brand color when unset
// @ts-ignore
const oActivityIndicator = ActivityIndicator.render
// @ts-ignore
ActivityIndicator.render = props =>
  oActivityIndicator({color: colors.brandBlue, ...props})
