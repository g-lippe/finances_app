import { Card, ProgressBar } from "@tremor/react"
import CardA from "../../components/card"
import { useState } from "react"
import MoneyField from "../../components/moneyField"
const { moneyMask, moneyToNumber } = require("../../helpers/converters")

export default function MainPage() {


  const [totalBudget, setTotalBudget] = useState(0)

  const [contas, setContas] = useState(
    {
      "Itaú": 200000,
      "Nubank": 50000
    }
  )

  const [poupanças, setPoupanças] = useState(
    {
      "Itaú": 1000000,
      "Nubank": 500000
    }
  )


  const [fatura, setFatura] = useState(60000)
  const [itauFinal, setItauFinal] = useState(0)
  const [nubankFinal, setNubankFinal] = useState(0)

  // Valor Transferências
  const [transf, setTransf] = useState(
    {
      "Corrente Nubank": 0,
      "Poupança Nubank": 0,
      "Poupança Itaú": 0
    }
  )




  console.log(contas)
  console.log(poupanças)
  console.log(fatura)

  useState(() => {
    setNubankFinal(contas["Nubank"] - fatura)
    console.log("Nubank Final", nubankFinal)
  }, [contas])


  return (
    <div className="bg-zinc-300 h-screen">
      <h3 className="text-center text-2xl font-sans p-4">Budgets and Payments</h3>


      <div className="flex p-3 flex-row gap-4">

        <div className="w-1/4">

          <h2 className="text-2xl pb-2 text-center">Contas</h2>
          {Object.entries(contas).map(([key, value]) => (
            <Card key={key} className="font-semibold mx-auto mb-3">
              <h4 className="text-2xl  text-gray-900 dark:text-gray-50"> {key} </h4>
              <MoneyField
                value={value}
                onChange={(e) => setContas({ ...contas, [key]: moneyToNumber(e.target.value) })}
              />
            </Card>
          ))}

          <h2 className="text-2xl pb-2 text-center">Poupanças</h2>
          {Object.entries(poupanças).map(([key, value]) => (
            <Card key={key} className="font-semibold mx-auto mb-3">
              <h4 className="text-2xl  text-gray-900 dark:text-gray-50"> {key} </h4>
              <MoneyField
                value={value}
                onChange={(e) => setPoupanças({ ...poupanças, [key]: moneyToNumber(e.target.value) })}
              />
            </Card>
          ))}


          <h2 className="text-2xl pb-2 text-center">Faturas</h2>
          <Card className="font-semibold mx-auto mb-3">
            <h4 className="text-2xl  text-gray-900 dark:text-gray-50"> Nubank </h4>

            <MoneyField
              value={fatura}
              onChange={(e) => setFatura(moneyToNumber(e.target.value))}
            />

          </Card>

        </div>


        <div className="w-2/4">

          <h2 className="text-2xl pb-2 text-center">Transferências</h2>
          <Card className="font-semibold mx-auto mb-3">
            <div className="flex flex-row">





              <div className="flex flex-col me-2 text-tremor-default text-xl text-tremor-content dark:text-dark-tremor-content">
                <h4> Corrente Nubank </h4>
                <h4> Fatura </h4>
                <h4> Transf Nubank </h4>
                <h4> Subtotal </h4>


              </div>

              <div className="flex flex-col">
                <p className="text-xl font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {moneyMask(contas["Nubank"])}
                </p>

                <p className="text-xl font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {moneyMask(fatura * -1)}
                </p>

                <MoneyField
                  classes="text-xl text-sky-400"
                  value={transf["Corrente Nubank"]}
                  onChange={(e) => setTransf({ ...transf, ["Corrente Nubank"]: moneyToNumber(e.target.value) })}
                />

                <p className="text-xl font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {moneyMask(contas["Nubank"] - fatura + transf["Corrente Nubank"])}
                </p>
              </div>


            </div>

          </Card>
        </div>




        <div className="w-1/4">
          <h2 className="text-2xl pb-2 text-center">Resumo</h2>

          <Card className="font-semibold mx-auto mb-3">

            <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"> Itaú </h4>
            <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              {moneyMask(contas["Itaú"] - transf["Corrente Nubank"] - transf["Poupança Itaú"] - transf["Poupança Nubank"])}
            </p>

            <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"> Nubank </h4>
            <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              {moneyMask(contas["Nubank"] - fatura + transf["Corrente Nubank"])}
            </p>

          </Card>



          <CardA />
        </div>



      </div>

    </div>
  )
}