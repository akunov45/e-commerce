import { useContext } from "react";
import { CART_CONTEXT } from "../../context";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CART_CONTEXT);

  // Считаем общую сумму
  const totalPrice = cart.reduce(
    (sum, item) => sum + parseInt(item.price.replace(/\s/g, "")) * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Корзина</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg text-center">Ваша корзина пуста 😔</p>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Горизонтальный скролл для таблицы */}
          <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
            <table className="min-w-[600px] bg-white w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-700 text-sm">Товар</th>
                  <th className="px-4 py-2 text-left text-gray-700 text-sm">Категория</th>
                  <th className="px-4 py-2 text-left text-gray-700 text-sm">Цена</th>
                  <th className="px-4 py-2 text-left text-gray-700 text-sm">Кол-во</th>
                  <th className="px-4 py-2 text-left text-gray-700 text-sm">Действие</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t border-gray-200 hover:bg-gray-50 transition"
                  >
                    {/* Товар с мини-картинкой */}
                    <td className="px-4 py-3 flex items-center gap-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <span className="text-gray-800 text-sm truncate max-w-[120px]">
                        {item.name}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{item.category}</td>
                    <td className="px-4 py-3 text-gray-800 text-sm">{item.price} сом</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{item.quantity}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs transition"
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Итоговая сумма */}
          <div className="flex justify-end mt-4">
            <p className="text-lg font-bold text-(--primary-color)">
              Итого: {totalPrice.toLocaleString()} сом
            </p>
          </div>

          {/* Кнопка оформить заказ */}
          <div className="flex justify-end mt-2">
            <button className="px-6 py-2 border hover:border-(--color-orange) rounded-lg  transition text-sm">
              Оформить заказ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
