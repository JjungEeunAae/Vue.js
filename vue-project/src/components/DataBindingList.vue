<template>
<div>
  <table>
    <thead>
      <tr>
        <th>제품명</th>
        <th>가격</th>
        <th>카테고리</th>
        <th>배송료</th>
      </tr>
    </thead>
    <tbody>
              <!-- i > index -->
      <tr v-for="(item, i) in productList" :key="i">
        <td>{{item.product_name}}</td>
        <td>{{item.price}}</td>
        <td>{{item.category}}</td>
        <td>{{item.delivery_price}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>

export default{ 
  data(){
    return{
      productList : [
        {
          "product_name" : "기계식 키보드",
          "price" : 25000,
          "category" : "노트북/태블릿",
          "delivery_price" : 5000,
        },
        {
          "product_name" : "무선 마우스",
          "price" : 12000,
          "category" : "노트북/태블릿",
          "delivery_price" : 5000,
        },
        {
          "product_name" : "아이패드",
          "price" : 725000,
          "category" : "노트북/태블릿",
          "delivery_price" : 5000,
        },
      ]
    };
  }
}
</script>