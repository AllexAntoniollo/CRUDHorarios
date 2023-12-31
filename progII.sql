PGDMP                  
    {            progii    16.0    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24692    progii    DATABASE     }   CREATE DATABASE progii WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE progii;
                postgres    false            �            1259    24710    cursos    TABLE     �   CREATE TABLE public.cursos (
    id integer NOT NULL,
    nome character varying(30) NOT NULL,
    descricao character varying(255) NOT NULL,
    semestre integer NOT NULL
);
    DROP TABLE public.cursos;
       public         heap    postgres    false            �            1259    24715    cursos_id_seq    SEQUENCE     �   ALTER TABLE public.cursos ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.cursos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215            �            1259    24716    horarios    TABLE     �   CREATE TABLE public.horarios (
    id integer NOT NULL,
    materia character varying(30) NOT NULL,
    dia integer NOT NULL,
    horario_inicio time without time zone NOT NULL,
    horario_fim time without time zone NOT NULL,
    idc integer NOT NULL
);
    DROP TABLE public.horarios;
       public         heap    postgres    false            �            1259    24726    horarios_id_seq    SEQUENCE     �   ALTER TABLE public.horarios ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.horarios_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217            �          0    24710    cursos 
   TABLE DATA                 public          postgres    false    215   >       �          0    24716    horarios 
   TABLE DATA                 public          postgres    false    217   �       �           0    0    cursos_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.cursos_id_seq', 1, true);
          public          postgres    false    216            �           0    0    horarios_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.horarios_id_seq', 7, true);
          public          postgres    false    218            V           2606    24714    cursos pk_cursos 
   CONSTRAINT     N   ALTER TABLE ONLY public.cursos
    ADD CONSTRAINT pk_cursos PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.cursos DROP CONSTRAINT pk_cursos;
       public            postgres    false    215            X           2606    24720    horarios pk_horarios 
   CONSTRAINT     R   ALTER TABLE ONLY public.horarios
    ADD CONSTRAINT pk_horarios PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.horarios DROP CONSTRAINT pk_horarios;
       public            postgres    false    217            Y           2606    24721    horarios fk_horarios_idc    FK CONSTRAINT     t   ALTER TABLE ONLY public.horarios
    ADD CONSTRAINT fk_horarios_idc FOREIGN KEY (idc) REFERENCES public.cursos(id);
 B   ALTER TABLE ONLY public.horarios DROP CONSTRAINT fk_horarios_idc;
       public          postgres    false    4694    215    217            �   |   x���v
Q���W((M��L�K.-*�/V�s
�t��sW�q�Us�	u���
�:
�Ι�yə�
)�
����%���^���
(��M�,�WN�M-.)JUHIUHN��jZsqq W�&h      �   �   x���O�0��Y �e��N�#��&tT�ZT���F�]<i�����x�AL�h���|�7V,.��*�kSEԣ��c�Rww �7��@�W�L���� �ё��*��x�Q�g)ꮧְ~{2C�n�~L?@�h2h%�����EU6���66D}��]����Y�i��J����|4��4�w�7|"��ƿ     