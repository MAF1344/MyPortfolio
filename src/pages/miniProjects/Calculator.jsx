import { useState } from 'react'

export default function Calculator() {
  const [input, setInput] = useState('')
  const [isScientific, setIsScientific] = useState(false)

  const handleClick = (value) => {
    setInput((prev) => prev + value)
  }

  const handleClear = () => setInput('')
  const handleDelete = () => setInput((prev) => prev.slice(0, -1))

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString())
    } catch {
      setInput('Error')
    }
  }

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center bg-gray-100 pt-24 pb-10 transition-all duration-300`}
    >
      <div className="w-96 rounded-2xl bg-white p-6 shadow-lg">
        {/* Toggle Button */}
        <button
          onClick={() => setIsScientific(!isScientific)}
          className="mb-4 rounded-lg bg-blue-400 px-4 py-2 text-white"
        >
          {isScientific ? 'Standard Mode' : 'Scientific Mode'}
        </button>

        <input
          type="text"
          value={input}
          disabled
          className="mb-4 h-14 w-full rounded-lg border px-2 text-right text-xl"
        />

        <div className="grid grid-cols-4 gap-2">
          <button onClick={handleClear} className="btn col-span-2 bg-red-400">
            C
          </button>
          <button onClick={handleDelete} className="btn bg-yellow-400">
            ⌫
          </button>
          <button onClick={() => handleClick('/')} className="btn">
            ÷
          </button>

          {/* Angka & operator */}
          {['7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+'].map((val) => (
            <button key={val} onClick={() => handleClick(val)} className="btn">
              {val}
            </button>
          ))}

          <button onClick={() => handleClick('0')} className="btn col-span-2">
            0
          </button>
          <button onClick={() => handleClick('.')} className="btn">
            .
          </button>
          <button onClick={handleCalculate} className="btn bg-green-400">
            =
          </button>

          {/* Extra Scientific Buttons */}
          {isScientific && (
            <>
              <button onClick={() => handleClick('Math.sin(')} className="btn">
                sin
              </button>
              <button onClick={() => handleClick('Math.cos(')} className="btn">
                cos
              </button>
              <button onClick={() => handleClick('Math.tan(')} className="btn">
                tan
              </button>
              <button onClick={() => handleClick('Math.sqrt(')} className="btn">
                √
              </button>
              <button onClick={() => handleClick('Math.log(')} className="btn">
                log
              </button>
              <button onClick={() => handleClick(')')} className="btn">
                )
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
