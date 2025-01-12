
const { moneyMask } = require("../../helpers/converters")


export default function MoneyField({ value, onChange }) {

    return (

        <input
            className="text-tremor-metric  dark:text-dark-tremor-content-strong border-none w-full p-0"
            // defaultValue='$000'
            value={moneyMask(value)}
            onChange={onChange}
        />
    )
}