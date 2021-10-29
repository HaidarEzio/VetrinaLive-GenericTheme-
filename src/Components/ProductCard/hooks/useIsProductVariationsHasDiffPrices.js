import toNumber from 'lodash/fp/toNumber'
import uniq from 'lodash/fp/uniq'

function useIsProductVariationsHasDiffPrices(variants = []) {
  const prices = variants.map((data) => {
    return toNumber(data.combination_discount) > 0
      ? toNumber(data.combination_discount)
      : toNumber(data.combination_price)
  })
  return uniq(prices).length > 1
}
export default useIsProductVariationsHasDiffPrices
