<template>
  <svg :viewBox="`0 0 ${width} ${height}`">
    <rect x="0" y="0" :width="width" :height="height" :style="`fill:${hexColor}`"/>
  </svg>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue';

const colors = {
  gray: '#ced4da',
  red: '#f03e3e',
  pink: '#f783ac',
  grape: '#ae3ec9',
  violet: '#845ef7',
  indigo: '#4c6ef5',
  blue: '#228be6',
  cyan: '#3bc9db',
  teal: '#20c997',
  green: '#37b24d',
  lime: '#94d82d',
  yellow: '#ffd43b',
  orange: '#fd7e14',
};

const props = withDefaults(
  defineProps<{
    color?: 'gray' | 'red' | 'pink' | 'grape' | 'violet' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'green' | 'lime' | 'yellow' | 'orange';
    width?: number;
    height?: number;
  }>(),
  {
    color: 'gray',
    width: 320,
    height: 320
  }
);

const hexColor = computed(() => colors[props.color])
</script>