const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
   return `Olá ${order.name}, entrega para: ${order.order.delivery.deliveryPerson}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`
  };
  
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    const clone = Object.assign({}, order)
    clone.order.delivery.deliveryPerson = 'Luiz Silva';
    clone.payment.total = 50,00;
    return `Olá ${clone.order.delivery.deliveryPerson}, o total do seu pedido de ${Object.keys(clone.order.pizza)[0]}, ${Object.keys(clone.order.pizza)[1]} e ${clone.order.drinks.coke.type} é R$ ${clone.payment.total}.`
  
  };
  
  console.log(orderModifier(order));

  // Para os exercícios a seguir, use o seguinte código:

/*   Agora você vai fazer alguns exercícios.

Complete a função customerInfo() para que seu retorno seja similar a “Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701”.

💡 Note que o parâmetro da função já está sendo passado na chamada da função.

Complete a função orderModifier() para que seu retorno seja similar a “Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.”

Modifique o nome da pessoa compradora.

Modifique o valor total da compra para R$ 50,00. */
