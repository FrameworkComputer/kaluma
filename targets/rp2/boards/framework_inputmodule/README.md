# Raspberry Pi Pico

## Flash

Flash partitions

```
|         A        | B |     C     |     D     | E  |
|------------------|---|-----------|-----------|----|
|       512K       |16K|   256K    |   236K    | 4K |
                   |--------- flash.c ---------|

|------ 512K ------|------------ 512K --------------|
|----------------------- 1MB -----------------------|
```

- A : binary (firmware)
- B : storage (key-value database)
- C : user program (js)
- D : file system (lfs)
- E : serial number (readonly)
  (Total : 1MB)
