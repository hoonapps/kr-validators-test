import {
  IsEmail,
  IsPhoneNumber,
  IsResidentIDNumber,
  IsBusinessNumber,
  IsPostalCode,
} from 'kr-validators';

export class CreateUserDto {
  @IsEmail({ message: '유효한 이메일 주소를 입력해주세요.' })
  email: string;

  @IsPhoneNumber(true, { message: '유효하지 않은 전화번호입니다.' })
  phone: string;

  @IsResidentIDNumber({ message: '유효하지 않은 주민등록번호입니다.' })
  residentId: string;

  @IsBusinessNumber({ message: '유효하지 않은 사업자등록번호입니다.' })
  businessNumber: string;

  @IsPostalCode({ message: '유효하지 않은 우편번호입니다.' })
  postalCode: string;
}
