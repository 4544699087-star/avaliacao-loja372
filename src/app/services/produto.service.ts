import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Produto[] = [
    {
      id: 1,
      nome: 'Notebook Gamer X1',
      descricao: 'Notebook de alta performance para jogos e trabalho.',
      descricaoDetalhada: 'O Notebook Gamer X1 conta com processador de última geração, placa de vídeo dedicada, 16GB de RAM e SSD de 512GB, ideal para quem busca desempenho máximo em jogos e aplicações profissionais.',
      preco: 6499.90,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5ujpJhzt11xXmfFuI4OhrkPyemrCcr-FyKxe4vkPjg&s'
    },
    {
      id: 2,
      nome: 'Smartphone Nova 5G',
      descricao: 'Smartphone com câmera tripla e tela AMOLED.',
      descricaoDetalhada: 'O Smartphone Nova 5G possui tela AMOLED de 6.5 polegadas, câmera tripla de 108MP, bateria de longa duração e conectividade 5G, entregando uma experiência completa de uso diário.',
      preco: 2399.00,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1z67SbEGdxAmO99emQsbiwEKdPa17U4JC3XyscXkug&s=10'
    },
    {
      id: 3,
      nome: 'Fone Bluetooth AirSound',
      descricao: 'Fone de ouvido sem fio com cancelamento de ruído.',
      descricaoDetalhada: 'O AirSound oferece cancelamento ativo de ruído, até 30 horas de bateria com o case de recarga, e som de alta fidelidade, perfeito para música, chamadas e viagens.',
      preco: 349.90,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSfgnmRF3XLvcJ1y2g6AMFvc8Vl_CfIiq1NNByUwFbg&s'
    }
  ];

  getProdutos(): Produto[] {
    return this.produtos;
  }

  getProdutoPorId(id: number): Produto | undefined {
    return this.produtos.find(p => p.id === id);
  }
}
