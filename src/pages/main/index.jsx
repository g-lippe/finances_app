import { Card, ProgressBar } from "@tremor/react"
import CardA from "../../components/card"
import { useState } from "react"
import MoneyField from "../../components/moneyField"
import MoneyDisplay from "../../components/moneyDisplay"
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

            <div className="flex flex-row ">



              <div className="flex flex-col text-tremor-default text-xl">
                <h4> Nubank Corrente </h4>
                <div className="flex flex-row pt-1">
                  <div className="flex flex-col me-2 text-tremor-default text-xl text-tremor-content dark:text-dark-tremor-content">
                    <h4> Saldo </h4>
                    <h4> Fatura </h4>
                    <h4> Transf </h4>
                    <h4> Subtotal </h4>
                  </div>

                  <div className="flex flex-col">
                    <MoneyDisplay value={contas["Nubank"]} />
                    <MoneyDisplay value={fatura * -1} />

                    <MoneyField
                      classes="text-xl text-orange-600"
                      value={transf["Corrente Nubank"]}
                      onChange={(e) => setTransf({ ...transf, ["Corrente Nubank"]: moneyToNumber(e.target.value) })}
                    />

                    <MoneyDisplay value={contas["Nubank"] - fatura + transf["Corrente Nubank"]} />
                  </div>

                </div>
              </div>

              <div className="flex flex-col text-tremor-default text-xl">
                <h4> Nubank Poupança </h4>
                <div className="flex flex-row pt-1">
                  <div className="flex flex-col me-2 text-tremor-default text-xl text-tremor-content dark:text-dark-tremor-content">
                    <h4> Saldo </h4>
                    <h4> Transf </h4>
                    <h4> Subtotal </h4>
                  </div>

                  <div className="flex flex-col">
                    <MoneyDisplay value={poupanças["Nubank"]} />

                    <MoneyField
                      classes="text-xl text-orange-600"
                      value={transf["Poupança Nubank"]}
                      onChange={(e) => setTransf({ ...transf, ["Poupança Nubank"]: moneyToNumber(e.target.value) })}
                    />

                    <MoneyDisplay value={poupanças["Nubank"] + transf["Poupança Nubank"]} />
                  </div>

                </div>
              </div>

              <div className="flex flex-col text-tremor-default text-xl">
                <h4> Itaú Poupança </h4>
                <div className="flex flex-row pt-1">
                  <div className="flex flex-col me-2 text-tremor-default text-xl text-tremor-content dark:text-dark-tremor-content">
                    <h4> Saldo </h4>
                    <h4> Transf </h4>
                    <h4> Subtotal </h4>
                  </div>

                  <div className="flex flex-col">
                    <MoneyDisplay value={poupanças["Itaú"]} />

                    <MoneyField
                      classes="text-xl text-orange-600"
                      value={transf["Poupança Itaú"]}
                      onChange={(e) => setTransf({ ...transf, ["Poupança Itaú"]: moneyToNumber(e.target.value) })}
                    />

                    <MoneyDisplay value={poupanças["Itaú"] + transf["Poupança Itaú"]} />
                  </div>

                </div>
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