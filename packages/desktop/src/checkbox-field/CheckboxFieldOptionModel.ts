import {ReactNode} from 'react'

import {OptionModel} from '@qiwi/pijma-core'

export default interface CheckboxFieldOptionModel<V> extends OptionModel<V> {
  label: ReactNode
  description?: ReactNode
}
